<!-- html -->
<template>
    <Person a="哈哈"/>
</template>

<!-- js/ts -->
<script lang="ts" setup name="App">
import Person from './components/Preson.vue'
import { reactive } from 'vue'
import {type Persons} from '@/types'

let personList = reactive<Persons>([
    {id:'dasdkjalkdjl1',name:'张三', age:18},
    {id:'dasdkjalkdjl2',name:'李四', age:20},
    {id:'dasdkjalkdjl3',name:'王五', age:23, x:222}
])
</script>

<!-- css -->
<style scoped></style>