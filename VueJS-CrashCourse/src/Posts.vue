<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Post-s',
  data() {
    return {
      posts: [
        { id: 1, title: 'First Post', body: 'This is the first post' },
        { id: 2, title: 'Second Post', body: 'This is the second post' }
      ] as Array<{ id: number; title: string; body: string }>
    };
  },
  // Use mounted lifecycle hook to fetch data after component is mounted
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.posts = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }
});
</script>

<style scoped>
.posts {
  padding: 20px;
}
</style>
