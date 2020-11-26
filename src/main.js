import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import store from "./store"
import { routes } from "./router/routes"

Vue.config.productionTip = true

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
