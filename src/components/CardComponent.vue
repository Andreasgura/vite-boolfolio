<template>
        
      <div class="col-4 mb-5">
        
        <h2>{{ project.title }}</h2>

        <p>{{ project.description }}</p>

        <img :src="showImg" :alt="project.title" class="img-fluid">

        <router-link :to="{ name: 'show-project', params: { slug: project.slug } }">Vedi dettagli progetto</router-link>

      </div>

</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        project: Object
    },

    computed: {
        showImg() {
            return this.project.screenshot? this.project.screenshot : '/images/bar-neon.png';
        }

    }

}
</script>

