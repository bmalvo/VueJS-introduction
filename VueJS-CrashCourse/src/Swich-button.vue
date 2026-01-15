<script setup lang="ts">
const props = defineProps<{
    action?: (payload: PointerEvent) => void
}>()

// const action = () => {

//     return !props.value
// }
</script>

<template>
 <button class="btn btn-primary" @click="props.action">
      toggle
    </button> 
</template>

<style>

</style>