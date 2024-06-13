<template>
  <HederComponent></HederComponent>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import HederComponent from './components/HeaderComponent.vue'
import axios from 'axios';
import { store } from './store';

export default {
  name: 'App',
  components: {
    HederComponent
  },

  data() {
    return {
      store
    }
  },
  methods: {
    getTechnologies() {
      axios
      .get(this.store.baseUrl + this.store.endPoints.technologies)
      .then((res) => {
        console.log(res.data);

        this.store.technologies = res.data.results;

      })
    }
  },
  mounted() {
    
        this.getTechnologies();

  }
}
</script>

<style lang="scss" scoped></style>