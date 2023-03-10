const Layout = () => import("@/layout/index.vue");

export default {
  path: "/wujie",
  name: "WuJie",
  component: Layout,
  redirect: "/wujie/vue2",
  meta: {
    title: "Vue2",
    rank: 6
  },
  children: [
    {
      path: "/wujie/vue2",
      name: "WuJieVue2",
      component: () => import("@/views/wujie/vue2.vue"),
      meta: {
        title: "Vue2"
      }
    }
  ]
} as RouteConfigsTable;
