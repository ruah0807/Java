<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Soldout</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">제품리스트</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/detail?product_id=1">제품상세페이지</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/create">제품등록페이지</router-link>
                </li>
                </ul>
                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-secondary" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
  <router-view/>
  <footer class="mt-5 py-5 bg-dark text-muted">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2"
                    role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/>
                    <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
                </svg>
                <small class="d-block mb-3 text-muted">&copy; 2017–2023</small>
            </div>
            <div class="col-3 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                <li><a class="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Random feature</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Team feature</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Another one</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Last time</a></li>
                </ul>
            </div>
            <div class="col-3 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                <li><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
                </ul>
            </div>
            <div class="col-3 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                <li><a class="link-secondary text-decoration-none" href="#">Business</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Education</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Government</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Gaming</a></li>
                </ul>
            </div>
            <div class="col-3 col-md">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                <li><a class="link-secondary text-decoration-none" href="#">Team</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Locations</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
                <li><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
