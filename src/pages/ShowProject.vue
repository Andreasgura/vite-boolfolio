<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6">

                <h1>{{ project.title }}</h1>
                <p>{{ project.description }}</p>

                <img :src="project.screenshot" :alt="project.title" class="img-fluid">
                <ul>
                    <li>
                        <a :href="project.link_github">Link Github</a>
                    </li>
                    <li>
                        <a :href="project.link_demo">Link Demo</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>




</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'ShowProject',
    data() {

        return {
            store,
            slug: this.$route.params.slug,
            project: {},
        }

    },

    mounted() {
        axios.
            get(this.store.baseUrl + this.store.endPoints.projects + '/' + this.slug)
            .then((res) => {
                console.log(res.data);
                this.project = res.data.results;
                console.log(this.project);
                console.log(this.project.link_github);

            })
    }

}

</script>

<style lang="scss" scoped></style>