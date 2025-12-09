<script setup lang="ts">

import { ref, onMounted } from 'vue'

const count = ref(0);
const message = ref('');
const number = ref(10);
const isActive = true;
const url = 'https://edwindiaz.com'
const options = ref([])


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

<!-- Binding checkbox input -->

<div class="container">
  <h1>Two way binding</h1>

  <form action="">
      
    <div class="col-sm-6">
      <input v-model="options" type="text" class="form-control">
    </div>
        
    <fieldset class="form-group">
      <legend>Radio buttons</legend>
      <div class="form-check">
          <label class="form-check-label">
            <input v-model="options"  type="checkbox" class="form-check-input" 
            name="optionsRadios" id="optionsRadios1" value="option-1" >
            Option one is this and that&mdash;be sure to include why it's great
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input v-model="options"   type="checkbox" class="form-check-input" 
            name="optionsRadios" id="optionsRadios2" value="option-2">
    Option two can be something else and selecting it will deselect option one
          </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
            <input v-model="options"   type="checkbox" class="form-check-input" 
              name="optionsRadios" id="optionsRadios3" value="option-3">
                Option three is disabled
            </label>
          </div>
    </fieldset>
            <p> You selected : {{ options }}</p>
            
  </form>
</div>

<!-- Directives -->
<div class="container">
  <h1>Directives</h1>
  <h2 @click="number++">Increse</h2>
  <h2>{{ number }}</h2>
  <h2 @click="number--">Decrese</h2>
</div>

</template>
<style scoped></style>
