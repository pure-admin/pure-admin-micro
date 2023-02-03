const Layout = () => import("@/layout/index.vue");

export default {
  path: "/micro",
  name: "Micro",
  component: Layout,
  redirect: "/micro/index",
  meta: {
    title: "基于MicroApp的微应用",
    rank: 0
  },
  children: [
    {
      path: "/micro/index",
      name: "MicroIndex",
      component: () => import("@/views/micro/index.vue"),
      meta: {
        title: "基于MicroApp的微应用"
      }
    }
  ]
} as RouteConfigsTable;
