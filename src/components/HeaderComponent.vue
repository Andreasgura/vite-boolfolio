<template>
    <div class="container d-flex justify-content-between">
        <div>
            <ul>
                <li>
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'projects' }">Progetti</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'contacts' }">Contatti</router-link>
                </li>
            </ul>
        </div>

        <div>
            <select class="form-select" aria-label="Default select example">
            <option selected>Seleziona categoria</option>
            <option v-for="technology in store.technologies" :key="technology.id">{{ technology.name }}</option>
        </select>
        </div>
    </div>
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

<style lang="scss" scoped></style>