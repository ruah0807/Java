
const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs');

app.use(session({
secret: 'secret code',  //세션의 키 의미는 없어 보인다.
resave: false,
saveUninitialized: false,
cookie: {
secure: false,
maxAge: 1000 * 60 * 60
}
}));


const server = app.listen(3000, () => {
	console.log('Server started. port 3000.');
});

const db = {
	database: "dev_class",
	connectionLimit: 10,
	host: "localhost",
	user: "root",
	password: "aaaa"
};

const dbPool = require('mysql').createPool(db);

app.post('/api/login', async(request, res) => {
    request.session['email'] = 'gwon@naver.com';      //email 키 값을 사용합니다.
    res.send('ok'); 
});

app.post('/api/logout', async(request, res) => {
        request.session.destroy();
        res.send('ok')
});

const sql = require('./sql.js');

app.post('/api/:alias', async (request, res) => {
    if(!request.session.email) {
        return res.status(401).send({error:'You need to login.'});   //에러 메시지 입력
    }
    
        try {
            res.send(await req.db(request.params.alias));
        } catch (err) {
            res.status(500).send({
                error: err
            })
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
