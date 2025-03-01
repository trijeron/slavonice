import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/components/AboutPage.vue';


const routes = [
    {
        path: '/',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/accommodation',
        name: 'Accommodation',
        component: () => import('@/components/AccommodationPage.vue')
    },
    {
        path: '/activities',
        name: 'Activities',
        component: () => import('@/components/ActivitiesPage.vue')
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
