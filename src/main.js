import { createApp } from 'vue';
import App from './App.vue';

import '@/assets/css/index.css';

import pinia from '@/stores/index.js';
import router from '@/router/index.js';


import '@/tools/_console.js';

createApp(App).use(router).use(pinia).mount('#app');