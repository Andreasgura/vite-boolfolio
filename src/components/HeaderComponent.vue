<template>
<ul>
    <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
    </li>
    <li>
        <router-link :to="{ name: 'projects' }">Progetti</router-link>
    </li>
</ul>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
        }
    }

}
</script>

<style lang="scss" scoped>

</style>