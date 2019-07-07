import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import EleForm from 'vue-ele-form'
import EleFormJson from '../lib/index'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(EleForm)
Vue.component(EleFormJson.name, EleFormJson)

new Vue({
  render: h => h(App)
}).$mount('#app')
