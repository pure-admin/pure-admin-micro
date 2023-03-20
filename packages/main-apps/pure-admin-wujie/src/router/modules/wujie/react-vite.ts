const Layout = () => import("@/layout/index.vue");

export default {
  path: "/wujie",
  name: "WuJie",
  component: Layout,
  redirect: "/wujie/react-vite",
  meta: {
    title: "React-Vite",
    rank: 8
  },
  children: [
    {
      path: "/wujie/react-vite",
      name: "WuJieReactVite",
      component: () => import("@/views/wujie/react-vite.vue"),
      meta: {
        title: "React-Vite"
      }
    }
  ]
} as RouteConfigsTable;
