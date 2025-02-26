<template>
    <div class="persion">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, toRefs } from 'vue'
let person = reactive({
    name: '奔驰',
    age: 10
})
let {name,age} = toRefs(person)

function changeName() {
    name.value += '~'
}
function changeAge() {
    age.value += 1
}
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