export default {
  path: "/micro",
  meta: {
    title: "vue3-vite应用",
    rank: 14
  },
  children: [
    {
      path: "/micro/vue3-vite",
      name: "MicroViteVue3",
      component: () => import("@/views/micro/vue3-vite.vue"),
      meta: {
        title: "vue3-vite应用"
      }
    }
  ]
} as RouteConfigsTable;
