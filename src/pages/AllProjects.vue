<template>
    <h1>Tutti i progetti</h1>
    <div class="container">
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col-4 mb-5">
        <h2>{{ project.title }}</h2>

        <p>{{ project.description }}</p>

        <img :src="project.screenshot" :alt="project.title">

      </div>
    </div>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
  </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'AllProjects',
    data() {
    return {
      store,
      projects: [],
      currentPage: 1,
    }
  },
  methods: {
    getProjects() {
      axios
        .get(this.store.baseUrl + this.store.endPoints.projects, {
          params: {
            page: this.currentPage
          }
        })
        .then((res) => {
          console.log(res.data);
          this.projects = res.data.results.data;
          console.log(this.projects);
        });
    }
  },
  mounted() {
    this.getProjects();
  }
}
</script>

<style lang="scss" scoped>

</style>