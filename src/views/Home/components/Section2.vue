<template>
  <section class="section-2 wrap">
    <ul>
      <li class="article-box">
        <div class="article-cover">
          <img src="/public/images/pagesBackgroundImage/1.png" alt="">
        </div>
        <div class="article-detail">

        </div>
      </li>

      <li class="article-box">
        <div class="article-cover">
          <img src="/images/pagesBackgroundImage/1.png" alt="">
        </div>
        <div class="article-detail">

        </div>
      </li>
    </ul>

    <!-- <router-link to="/article">进入详情页</router-link> -->
  </section>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.section-2 {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    width: 1px;
    height: calc(100% + 25vw);
    background-color: rgb(231, 216, 216);
    z-index: -2;
  }
  margin-top: 10rem;
  padding: 0 2rem;
  ul {
    .article-box {
      margin-bottom: 10rem;
      .article-cover {
        border-radius: .5rem;
        overflow: hidden;
        transition: all .6s;
        background-color: #eee;
        &:hover {
          transform: scale(0.95);
        }
      }
    }
    .article-box:nth-child(odd) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .article-cover {
        width: 65rem;
        height: 40rem;
        z-index: 888;
      }
      .article-detail {
        border: 1px dotted grey;
        margin-left: -4rem;
        width: 45rem;
        padding: 3rem 2rem;
        height: 35rem;
        border-radius: .5rem;
      }
    }
    .article-box:nth-child(even) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      .article-cover {
        width: 65rem;
        height: 40rem;
        z-index: 888;
      }
      .article-detail {
        border: 1px dotted grey;
        margin-right: -4rem;
        width: 45rem;
        padding: 3rem 2rem;
        height: 35rem;
        border-radius: .5rem;
      }
    }
  }
  
}
</style>