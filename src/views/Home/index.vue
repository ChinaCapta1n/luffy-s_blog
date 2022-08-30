<template>
  <div class="home">
      <section1 :data="Section1Data" />
  </div>
</template>

<script>
import Section1 from './components/Section1.vue';
import Section1Data from "@/mock/_home_entry.json";

export default {
  components: {
    Section1
  },
  setup() {
    return {
      Section1Data
    }
  }
}
</script>

<style lang="less" scoped>

</style>