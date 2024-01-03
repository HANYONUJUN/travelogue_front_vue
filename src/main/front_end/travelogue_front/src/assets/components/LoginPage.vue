<template>
  <div class="wrap">
        <div class="form-wrap">
          <div class="button-wrap">
              <div id="btn"></div>    
              <button type="button" class="togglebtn" @click="triggerLogin">로그인</button>
              <button type="button" class="togglebtn" @click="triggerRegister">회원가입</button>
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
        
        <div class="sns_text_underline">
          <p> 다른 계정으로 로그인 </p>
       </div>

        <div class="sns_login">
          <button id="google">
            <img src="../img/google.png" id="google_img">
          </button>

          <button id="kakao">
            <img src="../img/kakao.png" id="kakao_img">
          </button>
                   
          <button id="naver">
            <img src="../img/naver.png" id="naver_img">
          </button>
        </div>


       <div class="image">
        <img src="../img/hanok.webp">
      </div>
      
   
      </div>
  </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { login, register } from '../data/loginAction';
  import '../scss/user.scss';
  
  export default defineComponent({

    setup() {
      const triggerLogin = () => {
        login();
      };
  
      const triggerRegister = () => {
        register();
      };
  
      return {
        triggerLogin,
        triggerRegister,
      };
    },
  });
  </script>