const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs');
const cors = require('cors');

let corsOption = {
    origin: 'http://localhost:8080',
    credentials: true
}

app.use(cors(corsOption));

app.use(session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000*60*60
    }
}));

app.use(express.json({
    limit: '50mb'
}));

const server = app.listen(3000, () => {
    console.log('Server started. port 3000.');
});

let sql = require('./sql.js');

fs.watchFile(__dirname + '/sql.js', (curr, prev) => {
    console.log('sql 변경시 재시작 없이 반영되도록 함.');
    delete require.cache[require.resolve('./sql.js')];
    sql = require('./sql.js');
});

const db = {
    database: "dev_class",
    connectionLimit: 10,
    host: "192.168.0.150",
    user: "root",
    password: "mariadb"
};

const dbPool = require('mysql').createPool(db);

app.post('/api/login', async (request, res) => {
    request.session['email'] = 'freealice@kakao.com';
    res.send('로그인 성공');
});

app.post('/api/logout', async (request, res) => {
    request.session.destroy();
    res.send('로그아웃 성공');
});

app.post('/apirole/:alias', async (request, res) => {
    if (!request.session.email) {
        return res.status(401).send({
            error: 'You need to login.'
        });
    }
    try {
        res.send(await req.db(request.params.alias));
    }catch (err) {
        res.status(500).send({
            error: ReferenceError
        });
    }
});

app.post('/api/:alias', async (request, res) => {
    try {
        res.send(await req.db(request.params.alias, request.body.param));
    }catch (err) {
        res.status(500).send({
            error: ReferenceError
        });
    }
});

const req = {
    async db(alias, param = [], where = '') {
        return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, param,
            (error, rows) => {
                if (error) {
                    if (error.code != 'ER_DUP_ENTRY')
                    console.log(error);
                resolve({
                    error
                });
                } else resolve(rows);
            }));
    }
};
