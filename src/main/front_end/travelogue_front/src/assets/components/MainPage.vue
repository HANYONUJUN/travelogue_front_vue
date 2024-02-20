<template>
    <div class="meun">
      <div class="meun_list">
        <a href="#" v-scroll-to="'#intro'">intro</a>
        <a href="#" v-scroll-to="'#about'">about</a>
        <a href="#" v-scroll-to="'#contact'">contact</a>
      </div>
      
      <div class="user_meun">
        <button @click="goToLogin"><a>login/join</a></button>
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

      <div class="plan_map_img">
        <img src="../img/locationmap.png">
      </div>

      <div class="main_section">
        <h2>
          원하시는 여행 장소를 찾고<br/>
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
  import { defineComponent, onMounted} from 'vue';
  import { useRouter } from 'vue-router';
  import VueScrollTo from 'vue-scrollto';
  import '../scss/main.scss';
  import { observer } from '../data/mainAction';
  
  export default defineComponent({
    directives: {
      'scroll-to': VueScrollTo // directives에 vue-scrollto 등록
    },
    setup() {
      const router = useRouter();

      onMounted(() => {
        const titleList: HTMLElement[] = Array.from(document.querySelectorAll('h2'));
        // 반복문을 돌려 모든 DOM에 적용
        titleList.forEach((el: HTMLElement) => observer.observe(el));
      });

      const goToLogin = () => {
        router.push({ name: 'Login' });
      };
  
      return { goToLogin };

    }
  });
  </script>
  