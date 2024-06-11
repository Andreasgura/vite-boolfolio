<template>
        
      <div class="col-4 mb-5">
        console.log(this.project);
        <h2>{{ project.title }}</h2>

        <p>{{ project.description }}</p>

        <img :src="project.screenshot" :alt="project.title">

      </div>

</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        project: Object
    }
}
</script>

