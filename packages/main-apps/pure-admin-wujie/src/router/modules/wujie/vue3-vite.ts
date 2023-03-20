const Layout = () => import("@/layout/index.vue");

export default {
  path: "/wujie",
  name: "WuJie",
  component: Layout,
  redirect: "/wujie/vue3-vite",
  meta: {
    title: "Vue3-Vite",
    rank: 7
  },
  children: [
    {
      path: "/wujie/vue3-vite",
      name: "WuJieVue3Vite",
      component: () => import("@/views/wujie/vue3-vite.vue"),
      meta: {
        title: "Vue3-Vite"
      }
    }
  ]
} as RouteConfigsTable;
