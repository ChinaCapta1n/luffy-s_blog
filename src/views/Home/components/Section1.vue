<template>
  <section class="section-1" :style="{backgroundImage: `url(${data[0].image})`}">
    <h2 class="section-1-h2">{{ data[0].h2 }}</h2>
    <p class="section-1-p">{{ data[0].p }}</p>
  </section>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    setup() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.section-1 {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-h2,
  &-p {
    color: #fff;
    font-size: 2rem;
  }
  &-h2 {
    font-size: 4rem;
    margin-bottom: 1.2rem;
  }
}
</style>