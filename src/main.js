import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import Screen1 from "./views/screen1"
import Screen2 from "./views/screen2"
import Screen3 from "./views/screen3"
import PageNotFound from "./views/PageNotFound"
import store from "./store"

Vue.config.productionTip = true

Vue.use(VueRouter)

const routes = [
  { path: "/",        name: "1", component: Screen1 },
  { path: "/screen2", name: "2", component: Screen2 },
  { path: "/screen3", name: "3", component: Screen3 },
  { path: "*",        name: "4", component: PageNotFound },
]

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
