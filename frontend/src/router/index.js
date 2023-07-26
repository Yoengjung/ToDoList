import { createRouter, createWebHistory } from "vue-router";
import CompletedToDoList from "../components/CompletedToDoList.vue";
import DoToListHome from "../components/DoToListHome.vue";

const routes = [
  // Other routes...
  {
    path: "/",
    name: "Home",
    component: DoToListHome,
  },
  {
    path: "/completed-tasks", // Define the path for the CompletedToDoList component
    name: "CompletedToDoList", // Optional name for the route
    component: CompletedToDoList, // Specify the component to be rendered for this route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
