<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}，放大十倍：{{ bigSum }}</h2>
    <h3>欢迎来到：{{ school }}，坐落于：{{ address }}，大写：{{ upperSchoole }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from "vue";
import { useCountStore } from '@/store/count'
import { storeToRefs } from "pinia";
// 使用useCountStore，得到一个专门保存count相关的store
const countStore = useCountStore()
// storeToRefs 只会关注store中数据，不会对方法进行ref包裹
const { sum, school, address, bigSum, upperSchoole } = storeToRefs(countStore)

// 数据
let n = ref(1) // 用户选择的数字

// 方法
function add() {
  countStore.increment(n.value)
}
function minus() {

}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>