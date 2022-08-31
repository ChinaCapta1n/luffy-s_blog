<template>
  <div class="article pt100 wrap pd012rem">
      <article>
          <h2 id="pinia" class="article-title">大菠萝 Pinia</h2>
          <div class="article-details">
              <span class="dp">{{ content.author }}</span>
              <span class="dp">发布于：{{ content.published }}</span>
              <span class="dp">阅读数：{{ content.views }}</span>
          </div>
          <p class="article-description">
              Pinia就是Vuex的替代版，可以更好的兼容Vue2，Vue3以及TypeScript。在Vuex的基础上去掉了Mutation，只保留了state，getters和actions。Pinia拥有更简洁的语法，扁平化的代码编排，符合Vue3的Composition API
          </p>
          <div class="article-content" v-html="markdownToHtml">
            
          </div>
      </article>
      <!-- <aside class="article-aside">
          <ul class="a-to-hash">
              <li class="first-a">
                  <a href="#pinia">大菠萝 Pinia</a>
                  <ul>
                      <li>
                          <a href="#init-project">初始化项目</a>
                      </li>
                      <li>
                          <a href="#install-pinia">安装pinia</a>
                      </li>
                      <li>
                          <a href="#mounted-pinia">挂载pinia</a>
                      </li>
                      <li>
                          <a href="#created-store">创建store</a>
                      </li>
                  </ul>
              </li>
          </ul>
      </aside> -->
  </div>
</template>

<script setup>
import { marked } from 'marked';
import { ref, shallowRef } from 'vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/foundation.css'; 
import {content} from '@/mock/articles/test.js';
// console.log(content.content)

const render = new marked.Renderer();
marked.setOptions({
    renderer: render,
    gfm: true,
    pedantic: false,
    sanitize: false,

    highlight: (code, lang) => hljs.highlight(code, { language: lang }).value
})

const value = ref(content.content)

const markdownToHtml = shallowRef('')
markdownToHtml.value = marked(value.value)

const change = (value) => {
    markdownToHtml.vallue = marked(value);
}
</script>

<style lang="less" scoped>
@import "@/styles/article.less";
</style>