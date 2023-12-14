<template>
    <div class="meun">
      <div class="meun_list">
        <a href="#intro">intro</a>
        <a href="#about">about</a>
        <a href="#contact">contact</a>
      </div>
      <div class="user_meun">
        <button @click="goToLogin">login/join</button>
      </div>
    </div>
  
    <div class="intro" id="intro">
      <div class="intro_title">
        <h1>Travelogue</h1>
      </div>
  
      <div class="image">
        <div class="box">
          <img src="https://source.unsplash.com/1000x800" />
        </div>
  
        <div class="box">
          <img src="https://source.unsplash.com/1000x802" />
        </div>
        <div class="box">
          <img src="https://source.unsplash.com/1000x804" />
        </div>
  
        <div class="box">
          <img src="https://source.unsplash.com/1000x806" />
        </div>
      </div>
    </div>
  
    <div class="about" id="about">
      <div class="main_title">about</div>
  
      <div class="main_section">
        <h2>
          원하시는 여행 장소를 찾고<br />
          멋진 일정을 계획해보세요!
        </h2>
      </div>
  

  </div>

    <div class="contact" id="contact">
      <div class="contact_title">contact</div>
      <hr />
      <footer>
        <div class="contact_text">
          <p>
            <i class="bi bi-envelope"></i>
            gksdydwns34@naver.com, dlsrl5515@gmail.com
            <br />
            <i class="bi bi-telephone-fill"></i>
            010-8554-0186, 010-6621-2416
          </p>
        </div>
      </footer>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    setup() {
      const router = useRouter();
  
      const goToLogin = () => {
        router.push({ name: 'Login' });
      };
  
      return { goToLogin };
    }
  });
  </script>
  
  
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
  @import '../assets//scss/main.scss';

  </style>