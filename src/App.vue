<!-- html -->
<template>
    <h2 ref="titl2">你好</h2>
    <button @click="showLog">点击输出H2</button>
    <Person/>
</template>

<!-- js/ts -->
<script lang="ts" setup name="App">
    import Person from './components/Preson.vue'
    import {ref} from 'vue'

    let titl2 = ref()

    function showLog(){
        console.log(titl2.value)
    }
</script>

<!-- css -->
<style scoped></style>