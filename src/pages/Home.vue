<template>
    <div class="home">
        <h1>这是首页 Index</h1>
    </div>
</template>

<script setup lang="ts" name="" Home>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {
    setTimeout(() => {
        router.push('/news')
    }, 3000)
})
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>