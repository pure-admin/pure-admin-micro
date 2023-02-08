export default {
  path: "/micro",
  meta: {
    title: "vue3应用",
    rank: 12
  },
  children: [
    {
      path: "/micro/vue3",
      name: "MicroVue3",
      component: () => import("@/views/micro/vue3.vue"),
      meta: {
        title: "vue3应用"
      }
    }
  ]
} as RouteConfigsTable;
