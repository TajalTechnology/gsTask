import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Students from '../imports/ui/components/Student.vue'
import Books from '../imports/ui/components/Books.vue'

const routes = [
  {
    path: "/students",
    name: 'Students',
    component: Students
  },
  {
    path: "/books",
    name: "Books",
    component: Books
  },
]

const router = new VueRouter({
  routes
})

export default router