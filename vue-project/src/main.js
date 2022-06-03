import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {useUserStore} from "@/services/userStore"

const {user} = useUserStore();

user.value.nom = "QuentinMlt"

createApp(App).use(router).mount('#app');
