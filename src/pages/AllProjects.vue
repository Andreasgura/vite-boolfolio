<template>
    <h1>Tutti i progetti</h1>
    <div class="container">
        <div class="row">
            <CardComponent v-for="project in projects" :key="project.id" :project="project"/>
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
import CardComponent from '../components/CardComponent.vue';
import { store } from '../store';
export default {
    name: 'AllProjects',
    components: {
        CardComponent
    },
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