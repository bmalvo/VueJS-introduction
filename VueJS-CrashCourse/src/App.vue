<script setup lang="ts">
import { ref, onMounted } from 'vue'

const count = ref(0);
const message = defineModel();
const number = 10;
const isActive = true;
const url = 'https://edwindiaz.com'

const increment = () => {

  count.value++
};

onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
});

</script>

<template>


  <div class="container" id="app">   
    <button class="btn btn-primary" @click="increment">
      Count is: {{ count }}
    </button> 
    <h2>{{message}}</h2>
    <h2>{{number * 2}}</h2>
    <h2>{{isActive ? 'is active' : 'is not active'}}</h2>
    <h2><a :href=url >Link</a></h2>
    <h1>Two way binding</h1>
    <form action="">
      <div class="col-sm-6">
        <input v-model="message" type="text" class="form-control">
        <p>message: {{message}}</p>
      </div>
    </form>
  </div>

</template>

<style scoped></style>
