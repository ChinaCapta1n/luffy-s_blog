<template>
  <div class="home">
      <section1 :data="Section1Data" />
      <section2 />
  </div>
</template>

<script>
import Section1 from './components/Section1.vue';
import Section2 from './components/Section2.vue';
import Section1Data from "@/mock/_home_entry.json";

export default {
  components: {
    Section1,
    Section2
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