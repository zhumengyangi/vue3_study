<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
        <!-- 第一种写法 -->
        <!-- <router-link :to="`/news/detail/${news.id}/${news.title}/${news.content}`"> -->

        <!-- 第二种写法 -->
        <router-link :to="{
          name: 'xiang',
          query: {
            // 不能传递对象和数组，否则会报错
            id: news.id,
            title: news.title,
            content: news.content,
          }
        }">
          {{ news.title }}
        </router-link>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import router from '@/router'
import { reactive } from 'vue'
import { RouterView, RouterLink, useRouter } from 'vue-router'

const newsList = reactive([
  { id: 'ljahsdjalk01', title: '很好的抗癌食物', content: '西兰花' },
  { id: 'ljahsdjalk02', title: '如何一夜暴富', content: '都在刑法里' },
  { id: 'ljahsdjalk03', title: '今天周几', content: '周五' },
  { id: 'ljahsdjalk04', title: '天气如何', content: '晴转多云' }
])

interface NewsInter{
  id:string,
  title:string,
  content:string
}

// 编程式 路由导航
function showNewsDetail(news:NewsInter) {
  router.push({
    name: 'xiang',
    query: {
      // 不能传递对象和数组，否则会报错
      id: news.id,
      title: news.title,
      content: news.content,
    }
  })
}
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
  /* list-style: none; */
  padding-left: 10px;
}

.news li::marker {
  color: #64967E;
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