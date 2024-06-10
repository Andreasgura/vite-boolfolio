<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
</template>

<script>
import axios from 'axios';
import { store } from './store';
export default {
  name: 'App',
  data() {
    return {
      store,
      projects: []
    }
  },
  methods: {
    getProjects() {
      axios
        .get(this.store.baseUrl + this.store.endPoints.projects)
        .then((res) => {
          console.log(res.data);
        });
    }
  },
  mounted() {
    this.getProjects();
  } 
}
</script>

<style lang="scss" scoped></style>