<template>
    <div class="person">
        ??????????????
    </div>
</template>


<script lang="ts" setup name="Person">
import { type PersonInter, type Persons } from '@/types'

let personList: Persons = [
    { id: 'asdidlj1idfd1', name: '张三', age: 70 },
    { id: 'asdidlj1idfd2', name: '李四', age: 18 },
    { id: 'asdidlj1idfd3', name: '王五', age: 3 }
]
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