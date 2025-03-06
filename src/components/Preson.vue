<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">北京</h2>
        <h3>SOHO</h3>
        <button @click="showLog">点击输出h2</button>
    </div>
</template>


<script lang="ts" setup name="Person">
import { ref, defineExpose } from 'vue'

// ref 可以用在普通HTML标签上（获取：DMO节点）
// 也可以用在组件标签上（获取：组件实例对象）
let title2 = ref()
let a = ref(0)
let b = ref(1)
let c = ref(2)
let d = ref(3)

function showLog() {
    console.log(title2.value)
}

defineExpose({a,b,c})
</script>


<style>
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