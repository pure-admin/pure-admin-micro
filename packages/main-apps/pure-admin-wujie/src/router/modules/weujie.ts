const Layout = () => import("@/layout/index.vue");

export default {
  path: "/wujie",
  name: "WuJie",
  component: Layout,
  redirect: "/wujie/index",
  meta: {
    title: "Vue3",
    rank: 5
  },
  children: [
    {
      path: "/wujie/index",
      name: "WuJieIndex",
      component: () => import("@/views/wujie/index.vue"),
      meta: {
        title: "Vue3"
      }
    }
  ]
} as RouteConfigsTable;
