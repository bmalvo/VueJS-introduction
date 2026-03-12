<script setup lang="ts">

import { ref, onMounted, reactive, computed } from 'vue'
import Welcome from './Welcome-component.vue';
import AddingButton from './Adding-button.vue';
import SwichButton from './Swich-button.vue';
import Posts from './Posts.vue';
// import router from './RouterView.vue';

const count = ref(0);
const message = ref('page for learning vue template');
const number = ref(1);
const isActive = ref(true);
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
    genre: 'dog',
    name: 'Fafik',
    age: 12
  },
  {
    id: 2,
    genre: 'cat',
    name: 'ninja',
    age: 7
  },
  {
    id: 3,
    genre: 'turtle',
    name: 'Leon',
    age: 63
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

const swich = () => {
  isActive.value = !isActive.value
}

const computedListItems = computed(() => {
  return listItems.value.length > 0 ? 'Yes' : 'No'
})

onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
});

</script>


<template>

  <!-- Router place -->

  <RouterLink to="/">Go to Home</RouterLink><p></p>
  <RouterLink to="/about">Go to About</RouterLink>
  <RouterView />

  <!-- Navbar -->

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  <div class="container" id="app">   
    <Welcome/>  
    <h3>{{message}}</h3>
    <AddingButton :count="count" :increment="increment"/>
    <h2>{{number * 2}}</h2>
    <h2>{{isActive ? 'is active' : 'is not active'}}</h2>
    <SwichButton :action="swich"/>
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

<!-- table -->

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">age</th>
      <th scope="col">genre</th>
      <th scope="col">name</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in listItems" :key="item.id">
      <th scope="row">{{ item.id }}</th>
      <td>{{ item.name }}</td>
      <td>{{ item.genre }}</td>
      <td>{{ item.age }}</td>
    </tr>
   
  </tbody>
</table>

<Posts />


<!-- end -->
</div>
</template>

<style scoped>

/* @import '../node_modules/boostrap'; */

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