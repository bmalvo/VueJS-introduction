<script setup lang="ts">

import {ref} from 'vue'
</script>
<script lang="ts">

    const messageText = ref('Welcome to my page!');
</script>

<template>
    <h2>{{ messageText }}</h2>
</template>

<style>

</style>

