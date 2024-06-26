import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './pages/HomeComponent.vue';
import AllProjects from './pages/AllProjects.vue';
import ShowProject from './pages/ShowProject.vue';
import ContactUs from './pages/ContactUs.vue';


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
        },
        {
            path: '/projects/:slug',
            name: 'show-project',
            component: ShowProject
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactUs
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('./pages/NotFound.vue')
        }
    ]
});

export {router};
