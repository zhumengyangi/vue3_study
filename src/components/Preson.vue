<template>
    <div class="person">
        <h2>当前求和为:{{ sum }}</h2>
        <button @click="changeSum">点击加一</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import {
    ref, onBeforeMount, onMounted,
    onBeforeUpdate, onUpdated,
    onBeforeUnmount, onUnmounted
} from 'vue'

let sum = ref(0)
function changeSum() {
    sum.value += 1
}

// 挂载前
onBeforeMount(() => {
    console.log('挂载前')
})

// 挂载完毕
onMounted(() => {
    console.log('挂载完毕')
})

onBeforeUpdate(() => {
    console.log('更新前')
})

onUpdated(() => {
    console.log('更新完毕')
})

onBeforeUnmount(() => {
    console.log('卸载前')
})

onUnmounted(() => {
    console.log('卸载完毕')
})


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