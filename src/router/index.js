import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../views/HomePage.vue";
//   import user_type from "@/composables/middleware/user_middleware";
//   import auth from "@/composables/middleware/auth";
//   import checkExecutor from "@/middleware/check-executor";
  
  const routes = [
    {
      path: "/",
      name: "home",
      meta: { header: "primary" },
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: "/products",
      name: "product",
      // meta: { header: "primary" },
      component: () => import('@/views/products/Product.vue'),
      children: [

      ]
    },
    {
      path: "/products/create",
      name: "product.create",
      component: () => import('@/views/products/Create.vue')
    },
    {
      path: "/products/update",
      name: "product.update",
      component: () => import('@/views/products/Update.vue')
    },
    // {
    //   path: "/:categorySlug",
    //   name: "order.index",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "order-index" */ "../views/order/IndexView.vue"
    //     ),
    //   props: true,
    //   children: [
    //     {
    //       path: ":serviceSlugs*",
    //       name: "order.create",
    //       component: () =>
    //         import(
    //           /* webpackChunkName: "order-create" */ "../views/order/CreateView.vue"
    //         ),
    //       props: true,
    //     },
    //     {
    //       path: "/:categorySlug/:serviceSlugs+/:form",
    //       name: "order.update",
    //       component: () =>
    //         import(
    //           /* webpackChunkName: "order-update" */ "../views/order/UpdateView.vue"
    //         ),
    //       props: true,
    //     },
    //   ],
    // },
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    // history: createWebHashHistory(),
    routes,
    scrollBehavior() {
      // document.getElementById("page").scrollIntoView();
    },
  });
  
  export default router;
  