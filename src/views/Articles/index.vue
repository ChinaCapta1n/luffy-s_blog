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
              {{ content.description }}
          </p>
          <div class="article-content" v-html="markdownToHtml"></div>

          <aside class="article-aside">
              
          </aside>
      </article>
  </div>
</template>

<script setup>
import { onMounted, ref, shallowRef } from 'vue';
import {content} from '@/mock/articles/test.js';
import genH2Title from '@/hooks/useH2Title.js';
import richText from '@/hooks/useMarkdown.js';
import { marked } from 'marked';

onMounted(() => {
    genH2Title('.article .article-content h3');
    richText();
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