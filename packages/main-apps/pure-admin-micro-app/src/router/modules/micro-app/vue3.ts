export default {
  path: "/micro",
  meta: {
    title: "vue3应用",
    rank: 12
  },
  children: [
    {
      path: "/micro/index",
      name: "MicroIndex",
      component: () => import("@/views/micro/index.vue"),
      meta: {
        title: "vue3应用"
      }
    }
  ]
} as RouteConfigsTable;
