import Vue from "vue";
import Router from "vue-router";
import Home from "../components/home/Home.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    //Home
    {
      name: "Home",
      path: "/",
      component: Home
    }
  ]
});
