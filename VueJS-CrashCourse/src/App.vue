<script setup lang="ts">

import { ref, onMounted, reactive, computed } from 'vue'

const count = ref(0);
const message = ref('');
const number = ref(0);
const isActive = true;
const url = 'https://edwindiaz.com'
const options = ref([])
const fontSize = ref(30);
const firstStyle = reactive({
  color: 'blueviolet',
  fontStyle: 'italic'
})
const listItems = ref([
  {
    id: 1,
    genre: 'dog'
  },
  {
    id: 2,
    genre: 'cat'
  },
  {
    id: 3,
    genre: 'turtle'
  }
])

const increment = () => {
  count.value++
};

const increase = () => {
  fontSize.value++
  console.log(fontSize)
}

const decrease = () => {
  fontSize.value--
}

const computedListItems = computed(() => {
  return listItems.value.length > 0 ? 'Yes' : 'No'
})

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
  <span style="font-size: 24px;">{{ number }}</span> 
  <span v-if="number < 10">Too small!</span>
  <span v-else-if="number > 10">Too big!</span>
  <span v-else>Perfect!</span>
  <h2 @click="number--">Decrese</h2>
</div>


<!-- Inline binding -->

<div class="container">

  <h2>Inline binding</h2>
  
  <p :style="{ color:'red', fontSize: fontSize + 'px'}">Text needed for inline binding</p>
  <p :style="firstStyle">Another important text</p>
  
  <!-- class binding -->
  
<h2>class binding</h2>
<p class="static" :class="[isActive? 'Active' : 'notActive']">text for class binding</p>

<!-- event binding -->

<h2 :style="{fontSize: fontSize + 'px'}">Primary text</h2>
<button @click="increase" class="btn btn-success">increse</button>

<button @click="decrease" class="btn btn-danger">decrese</button>

<!-- list rendering -->

<ul>
  <li v-for="item in listItems" :key="item.id">{{ item.genre }}</li>
</ul>

<!-- computed properties -->

<h2>Have a list an items?</h2>
<h2>{{ computedListItems }}</h2>

<!-- end -->
</div>
</template>

<style scoped>


.static{
  color: rgb(62, 15, 202);
}

.Active {
  color: greenyellow
}
.notActive{
  color: red
}
</style>