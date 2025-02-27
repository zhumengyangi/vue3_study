<template>
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我加一</button>
</template>

<script lang="ts" setup name="Person">
  import {ref,watch} from 'vue'
  let sum = ref(0)

  function changeSum() {
    sum.value += 1
  }

  const stopWatch = watch(sum, (newValue, oldValue)=>{
    console.log('SUM 变化了', newValue, oldValue)
    if (newValue >=10) {
        stopWatch()
    }
  })
</script>


<style scoped>
.person {
    background-color: #346634;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}

li {
    font-size: 20px;
}
</style>