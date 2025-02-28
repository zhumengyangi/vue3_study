<template>
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名{{ person.name }}</h2>
    <h2>年龄{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeAll">修改全部</button>
</template>

<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue'
  let person = reactive({
    name: '张三',
    age:18
  })
  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function changeAll() {
    Object.assign(person, {name:'李四', age:80})
  }

  // 情况三：监视【reactive】定义的【对象类型】数据
  // 默认开启深度监视
  watch(person, (oldValue, newValue) => {
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