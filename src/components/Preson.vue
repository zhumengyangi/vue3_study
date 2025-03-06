<template>
    <div class="person">
        <h2>当前求和为:{{ sum }},放大十倍后:{{ bigSum }}</h2>
        <button @click="add">点击加一</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index" alt="">
        <br>
        <button @click="getDog">再来只🐕</button>
        <br>

    </div>
</template>

<script lang="ts" setup name="Person">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

const { sum, add, bigSum } = useSum()
const { dogList, getDog } = useDog()
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

img {
    height: 100px;
    margin-right: 10px;
}
</style>