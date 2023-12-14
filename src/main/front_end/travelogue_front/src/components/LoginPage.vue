<template>
<div class="wrap">
      <div class="form-wrap">
        <div class="button-wrap">
            <div id="btn"></div>    
            <button type="button" class="togglebtn" @click="login()">로그인</button>
            <button type="button" class="togglebtn" @click="register()">회원가입</button>
        </div>
      
      <form id="login"  class="input-group">
          <input type="email" class="input-field" placeholder="이메일" name="userEmail" maxlength="50">
          <input type="password" class="input-field" placeholder="비밀번호" name="userPassword" maxlength="20" >
          <button class="submit">로그인</button>
      </form>
      
      <form id="register"  class="input-group">
          <input type="email" class="input-field" placeholder="이메일" name="userEmail" maxlength="50">
          <input type="password" class="input-field" placeholder="비밀번호" name="userPassword" maxlength="20" >
          <input type="text" class="input-field" placeholder="이름" name="userName" maxlength="20">
          <button class="submit">회원가입</button>
      </form>

     <div class="image"><img src="../assets/img/hanok.webp"></div> 
       <!--<div class="image"><img src="/img/hanok.webp"></div> -->
  </div>
</div>
</template>

<script lang="ts">
export default {
  methods: {
    login() {
      const x = document.getElementById("login");
      const y = document.getElementById("register");
      const z = document.getElementById("btn");

      if(x && y && z) {
        x.style.left = "550px";
        y.style.left = "-300px";
        z.style.left = "0";
      }
    },
    register() {
      const x = document.getElementById("login");
      const y = document.getElementById("register");
      const z = document.getElementById("btn");

      if(x && y && z) {
        x.style.left = "-550px";
        y.style.left = "545px";
        z.style.left = "105px";
      }
    }
  },
  mounted() {
    window.onresize = () => document.location.reload();
  }
};
</script>

<style lang="scss">
@import "../assets/scss/user.scss";
</style>