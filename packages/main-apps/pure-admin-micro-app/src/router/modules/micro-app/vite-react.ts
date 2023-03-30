export default {
  path: "/micro",
  meta: {
    title: "react-vite应用",
    rank: 15
  },
  children: [
    {
      path: "/micro/react-vite",
      name: "MicroViteReact",
      component: () => import("@/views/micro/react-vite.vue"),
      meta: {
        title: "react-vite应用"
      }
    }
  ]
} as RouteConfigsTable;
