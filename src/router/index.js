import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import EventList from "@/views/EventList.vue";
import EventDetails from "@/views/EventDetails.vue";
import EventRegister from "@/views/EventRegister.vue";
import EventEdit from "@/views/EventEdit.vue"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: route => ({ page: parseInt(route.query.page || 1)})
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
  {
    path: "/event/:id/register",
    name: "'EventRegister",
    props: true,
    component: EventRegister
  },
  {
    path: "/event/:id/edit",
    name: "EventEdit",
    props: true,
    component: EventEdit
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
