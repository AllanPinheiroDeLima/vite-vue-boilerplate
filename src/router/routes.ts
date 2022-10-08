import { RouteRecordRaw } from "vue-router";
import Home from "@containers/Home/index.vue";
import About from "@containers/About/index.vue";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/about", component: About }
]
