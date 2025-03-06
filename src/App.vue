<!-- html -->
<template>
    <Person v-if="isShow"/>
</template>

<!-- js/ts -->
<script lang="ts" setup name="App">
import Person from './components/Preson.vue'
import {ref} from 'vue'

let isShow = ref(true)
</script>