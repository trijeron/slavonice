import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n';
import router from './router';
import './assets/styles/global.css'; // Import the global CSS file

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');
