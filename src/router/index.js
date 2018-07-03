import Vue from 'vue'
import Router from 'vue-router'
import text1 from './../components/texts/text1'
import text2 from './../components/texts/text2'
import text3 from './../components/texts/text3'
import text4 from './../components/texts/text4'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'text1',
      component: text1
    },
    {
      path: '/text2',
      name: 'text2',
      component: text2
    },
    {
      path: '/text3',
      name: 'text3',
      component: text3
    },
    {
      path: '/text4',
      name: 'text4',
      component: text4
    }
    
  ]
})
