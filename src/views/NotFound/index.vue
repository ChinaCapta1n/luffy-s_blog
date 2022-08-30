<template>
  <div class="not-found">
      <p>Not Found</p>
  </div>
</template>

<script>
import useFlags from '@/stores/modules/flags.js';

export default {
    beforeRouteEnter(to, from) {
        const flag = useFlags();
        flag.setNavStatus();
    },
    beforeRouteLeave(to, from) {
        flag.setNavStatus();
    },
    setup() {
        
        return {}
    }
}
</script>

<style langs="less" scoped>

</style>