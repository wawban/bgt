import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: () => import("@/pages"),
      redirect: '/bigdata/dw',
      children:[
        {
          path: '/bigdata/one',
            component: () => import("@/components/one")
        },
        {
          path: '/bigdata/tow',
            component: () => import("@/components/tow")
        },
        {
          path: '/bigdata/three',
            component: () => import("@/components/three")
        },
        {
          path: '/bigdata/four',
            component: () => import("@/components/four")
        },
        {
          path: '/bigdata/dw',
            component: () => import("@/components/dw")
        },
      ]
    }
  ]
})
