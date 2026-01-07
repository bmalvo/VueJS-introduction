<script setup lang="ts">
const props = defineProps<{
    count?: number
    increment?: (payload: PointerEvent) => void
}>()
</script>
<!-- <script setup lang="ts">
</script> -->

<template>
 <button class="btn btn-primary" @click="props.increment">
      Count is: {{ props.count }}
    </button> 
</template>

<style>

</style>