<template>
    <div class="person">
        <ul>
            <li v-for="p in list" :key="p.id">
                {{ p.name }} ===== {{ p.age }}
            </li>
        </ul>
    </div>
</template>


<script lang="ts" setup name="Person">
import { defineProps,withDefaults } from 'vue'
import { type Persons } from '@/types'

// 接收
// defineProps(['list'])

// 接收 + 限制类型
// defineProps<{list:Persons}>()

// 接收 + 限制类型 + 必要性 + 指定默认值
withDefaults(defineProps<{list?:Persons}>(),{
    list:()=> [{
        id:'wejhkfwh11',name:'ksf',age:19
    }]
})




// 接收 同时赋值
// let x = defineProps(['a'])

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