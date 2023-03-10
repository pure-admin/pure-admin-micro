const Layout = () => import("@/layout/index.vue");

export default {
  path: "/wujie",
  name: "WuJie",
  component: Layout,
  redirect: "/wujie/vue3",
  meta: {
    title: "Vue3",
    rank: 5
  },
  children: [
    {
      path: "/wujie/vue3",
      name: "WuJieVue3",
      component: () => import("@/views/wujie/vue3.vue"),
      meta: {
        title: "Vue3"
      }
    }
  ]
} as RouteConfigsTable;
