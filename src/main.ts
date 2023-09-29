import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import AiForm from "./packages/ai-form/index.js"; 
//import AiForm from "../ai-form/ai-form.js"; 
//import '../ai-form/style.css'
//import AiForm from "test-ai-form"; //导入
createApp(App).use(ElementPlus/*, { i18n: i18n.global.t }*/)
//.use(i18n)
.use(AiForm).mount('#app')


