<template>
    <h2>姓名{{ person.name }}</h2>
    <h2>年龄{{ person.age }}</h2>
    <h2>汽车:{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeOneCar">修改第一台车</button>
    <button @click="changeTwoCar">修改第二台车</button>
    <button @click="changeAllCar">修改所有车</button>
</template>

<script lang="ts" setup name="Person">
import { reactive,watch } from 'vue'

let person = reactive({
    name: '张三',
    age: 18,
    car: {
        c1: '本茨',
        c2: '宝马'
    }
})

function changeName() {
    person.name += '~'
}

function changeAge() {
    person.age += 1
}

function changeOneCar() {
    person.car.c1 = '奥迪'
}

function changeTwoCar() {
    person.car.c2 = 'BMW'
}

function changeAllCar() {
    person.car = {c1:'雅迪', c2:'艾玛'}
}

// 监视响应式对象中的某个属性，且该属性是基本类型的要写成函数式
// watch(()=> person.name,(newValue, oldValue)=>{
//     console.log('person变化了', newValue, oldValue)
// })

// 监视响应式对象中的某个属性，且该属性是对象类型的要写成函数式
// 可以直接写，可以是对象、也可以是函数
watch(()=>coperson.car,(newValue, oldValue)=>{
    console.log('person变化了', newValue, oldValue)
},{deep:true})


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