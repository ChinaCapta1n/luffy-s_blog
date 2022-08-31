<template>
  <footer class="footer">
      <p>This blog has running : 1259 d 6 h 41 m 40 s ღゝ◡╹)ノ♡</p>
      <p>当前  人在线</p>
  </footer>
</template>

<script>
import birth from '@/tools/_date_of_birth.js';
console.log(birth());

export default {
  
}
</script>

<style lang="less" scoped>
.footer {
    height: 100px;
    margin: 20vh 0 0;
    padding: 15px 0;
    color: #888;
    line-height: 1.5;
    text-align: center;
    font-size: 1.5rem;
    p {
      margin-bottom: 12px;
    }
}
</style>