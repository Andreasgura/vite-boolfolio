import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './pages/HomeComponent.vue';
import AllProjects from './pages/AllProjects.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent 
        },
        {
            path: '/projects',
            name: 'projects',
            component: AllProjects
        }
    ]
});

export {router};
