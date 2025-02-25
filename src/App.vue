<!-- html -->
<template>
    <div class="app">
        <h1>Hello World !</h1>
        <Person/>
    </div>
</template>

<!-- js/ts -->
<script lang="ts">
import Person from './components/Preson.vue'
    export default {
        name: 'App',
        components:{Person}
    }
</script>

<!-- css -->
<style>
    .app{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>