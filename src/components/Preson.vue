<template>
    <div class="persion">
        <h2>汽车信息：一辆{{ car.brand }}车，价值：{{ car.price }} 个</h2>
        <button @click="changeBrand">修改汽车品牌</button>
        <button @click="changePrice">修改汽车价格</button>
        <button @click="changeCar">修改汽车</button>
        <br>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum"> 点我加加</button>
    </div>

</template>
<!-- <script lang="ts">
export default {
    name: 'Person'
}
</script> -->

<script lang="ts" setup name="Person">
import { reactive, ref } from 'vue'
let car = ref({ brand: '奔驰', price: 100 })
let sum = ref(0)



function changeBrand() {
    car.value.brand = 'BMW'
}

function changePrice() {
    car.value.price += 10
}

function changeCar() {
    // Object.assign(car, {brand:'奥迪',price:30})
    
    car.value = {brand:'奥迪',price:30}
}

function changeSum() {
    sum.value +=1
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