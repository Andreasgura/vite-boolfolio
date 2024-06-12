<template>
  <h1>Tutti i progetti</h1>
  <div class="container">
    <div class="row">
      <CardComponent v-for="project in projects" :key="project.id" :project="project" />
    </div>


    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" :class="{ 'disabled' : currentPage == 1 }" href="#" @click.prevent="setParams(currentPage - 1)">Previous</a></li>

        <li class="page-item" v-for="page in lastpage" :key="page"><a class="page-link" :class="{ 'active' : currentPage == page }" href="#" @click.prevent="setParams(page)">{{ page }}</a></li>

        <li class="page-item"><a class="page-link" :class="{ 'disabled' : currentPage == lastpage }" href="#" @click.prevent="setParams(currentPage + 1)">Next</a></li>
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
      lastpage: 0,
      params: {}
    }
  },
  methods: {
    setParams(number) {
      this.currentPage = number
      console.log(this.currentPage);
      this.params = {
        page : this.currentPage
      }
      console.log(this.params.page);
      this.getProjects();
    },
    getProjects() {
      axios
        .get(this.store.baseUrl + this.store.endPoints.projects, {
          params: this.params
        })
        .then((res) => {
          // console.log(res.data);
          this.projects = res.data.results.data;
          // console.log(this.projects);
          this.currentPage = res.data.results.current_page;
          // console.log(this.currentPage);
          this.lastpage = res.data.results.last_page;
          this.params = null
        });
    }
  },
  mounted() {
    this.getProjects();
  }
}
</script>

<style lang="scss" scoped></style>