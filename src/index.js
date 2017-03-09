require('./css/style.scss')

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const vm = new Vue({
  template: require('./root.pug')(),
  router: new VueRouter({
    routes: [
      { path: '/', component: null }
    ],
    mode: 'hash',
    linkActiveClass: 'active'
  }),
  data: {

  },
  methods: {

  },
  mounted: function () {

  }
})

vm.$mount('#app')
