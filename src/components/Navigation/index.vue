<template>
  <nav class="nav" :class="{bottom_line: router.currentRoute.value.fullPath !== '/home'}">
      <ul class="nav-list wrap pd012rem">
          <li ref="navUnderline" @mouseover="navAnimation(index)" class="nav-item" v-for="(nav, index) in navData" :key="nav.id" :class="{logo: nav.isLogo}">
              <router-link :to="nav.path" :style="{color: randomColor(nav.isLogo)}" class="circle-spinning">
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
                  {{ nav.text }}
              </router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
import randomColor from '@/tools/_random_color.js';
import { onMounted, ref } from 'vue';
import router from '@/router/index.js';

export default {
    props: {
        navData: {
            type: Array,
            default: () => []
        }
    },
    setup() {

        const navUnderline = ref(null);

        const navAnimation = (index) => {
            console.log(navUnderline.value[index].offsetLeft)
        }

        onMounted(() => {
            
        })

        return {
            randomColor,
            navAnimation,
            navUnderline,
            router
        }
    }
}
</script>

<style lang="less" scoped>
.bottom_line {
    box-shadow: inset 0 -1px 0 #f3f3f4;
}
.nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: transparent;
    z-index: 999;
    .nav-list {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .nav-item {
            font-size: 1.5rem;
            margin-left: 2rem;
            a {
                font-weight: 700;
                position: relative;
                padding-bottom: .6rem;
            }
        }
    }
}
</style>