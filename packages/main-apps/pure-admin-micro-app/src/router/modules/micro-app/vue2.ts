export default {
  path: "/micro",
  meta: {
    title: "vue2应用",
    rank: 13
  },
  children: [
    {
      path: "/micro/vue2",
      name: "MicroVue2",
      component: () => import("@/views/micro/vue2.vue"),
      meta: {
        title: "vue2应用"
      }
    }
  ]
} as RouteConfigsTable;
