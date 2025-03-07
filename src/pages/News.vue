<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <router-link to="/news/detail">{{ news.title }}</router-link>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue'
import { RouterView,RouterLink } from 'vue-router'

const newsList = reactive([
  { id: 'ljahsdjalk01', title: '很好的抗癌食物', content: '西兰花' },
  { id: 'ljahsdjalk02', title: '如何一夜暴富', content: '都在刑法里' },
  { id: 'ljahsdjalk03', title: '今天周几', content: '周五' },
  { id: 'ljahsdjalk04', title: '天气如何', content: '晴转多云' }
])
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}

.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>