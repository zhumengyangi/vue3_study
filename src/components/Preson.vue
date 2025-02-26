<template>
    <div class="persion">
       姓：<input type="text" v-model="firstName"> <br>
       名：<input type="text" v-model="lastName"> <br>
       <button @click="changeFullName"> 将全名修改为其他的</button>
       全名： <span>{{fullName}}</span> <br>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref,computed } from 'vue'
    let firstName = ref('zhang')
    let lastName = ref('san')

    // 这么定义的fullName是一个计算属性，且只读
    // let fullName = computed(()=> {
    //     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    // })

    // 这么定义的fullName是一个计算属性，可读可写
    let fullName = computed({
        get() {
            return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
        },
        set(val) {
            const [str1, str2] = val.split('-')
            firstName.value = str1
            lastName.value = str2
        }
    })

    function changeFullName() {
        fullName.value = '其他-名称'
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