import Vue from "vue";
import VueRouter from "vue-router";
import {swiper} from "@/utils/global-methods";

Vue.use(VueRouter);

const routes = [{path: "/", component: swiper("index")}];

// Vue 라우터 인스턴스 생성
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;
