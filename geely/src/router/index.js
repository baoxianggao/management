import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'mainContent',
      component: require("../components/report/mainContent.vue"),
      children:[
        {
          path: '/main',
          component: require('../components/report/main')
        },
        {
          path: '/server',
          component: require('../components/serverManagement/serverManagement.vue'),
          children:[
            {
              path: '/serverStatus',
              component: require('../components/serverManagement/serverStatus.vue')
            },
            {
              path: '/serviceManagement',
              component: require('../components/serverManagement/serviceManagement.vue')
            }
          ]
        }
      ]
    },
    {
      path: '*',
      redirect: '/main'
    }
  ]
})
