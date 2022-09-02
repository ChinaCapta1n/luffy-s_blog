<template>
  
    <navigation :navData="NavigationData" v-if="navFlag" />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <home-footer></home-footer>
  
</template>

<script>
import Navigation from '@/components/Navigation/index.vue';
import HomeFooter from '@/components/Footer/index.vue';
import NavigationData from '@/mock/_navigation.json';
import useFlags from '@/stores/modules/flags.js';
import { storeToRefs } from 'pinia';

import a from '@/hooks/useScrollPosition.js';
console.log(a.setup())

export default {
  components: {
    Navigation,
    HomeFooter
  },
  setup() {

    const flag = useFlags();
    const { navFlag } = storeToRefs(flag);

    return {
      NavigationData,
      navFlag
    }
  }
}
</script>

<style>
.fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translate(-10px);
  }
</style>