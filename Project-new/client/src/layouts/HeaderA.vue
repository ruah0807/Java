<template>
<!-- eslint-disable-next-line -->
<!-- eslint-disable -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
		  <a class="navbar-brand" href="#">상품판매</a>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			  <li class="nav-item">
				<router-link class="nav-link" aria-current="page" to="/">홈</router-link>
			  </li>
			  <li class="nav-item">
				<router-link class="nav-link active" aria-current="page" to="/">제품리스트</router-link>
			  </li>
			  <li class="nav-item">
				<router-link class="nav-link" aria-current="page" to="/detail?product_id=1">제품상세페이지</router-link>
			  </li>	  		
			  <li v-if="user.email != undefined" class="nav-item">
				<router-link class="nav-link" aria-current="page" to="/sales">제품등록페이지</router-link>
			  </li>
        <li v-if="user.email == undefined" class="nav-item">
				  <button class="btn btn-danger" type="button" @click="kakaoLogin">login</button>
			  </li>
        <li v-else>
				  <button class="btn btn-danger" type="button" @click="kakaoLogout">logout</button>
			  </li>
			</ul>
			<form class="d-flex">
			  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
			  <button class="btn btn-outline-success" type="submit">Search</button>
			</form>
		  </div>
		</div>
	</nav>
</template>

<script>
// eslint-disable-next-line
 /* eslint-disable */
export default {
  name: 'Header',
  computed: {
    user(){
        return this.$store.state.user
    }
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
          scope: 'account_email',
          success: this.getProfile
      })
    },
    getProfile(authObj){
      console.log(authObj)
      window.Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
              const kakao_account = res.kakao_account;
              console.log(kakao_account);
              this.login(kakao_account);
              alert("로그인성공!")
          }
      })
    },
    async login(kakao_account){
      await this.$api("/api/login", {
          param: [
              {email:kakao_account.email, nickname:kakao_account.profile_nickname},
              {nickname:kakao_account.profile_nickname}
          ]
      });
      this.$store.commit("user", kakao_account);
    },
    kakaoLogout(){
      window.Kakao.Auth.logout((response) => {
        console.log (response);
        this.login(response);
        alert("로그아웃");
        this.$router.push({path:'/'});
      });
    }
  }
}
</script>
