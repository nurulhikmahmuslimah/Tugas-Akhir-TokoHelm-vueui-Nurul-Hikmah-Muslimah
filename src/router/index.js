import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Databarangs/Home.vue'
import Createdatabarangs from '../views/Databarangs/Createdatabarangs.vue'
import Editdatabarangs from '../views/Databarangs/Editdatabarangs.vue'
import Detaildatabarangs from '../views/Databarangs/Detaildatabarangs.vue'
import Suppliers from '../views/Suppliers/Suppliers.vue'
import Createsuppliers from '../views/Suppliers/Createsuppliers.vue'
import Editsuppliers from '../views/Suppliers/Editsuppliers.vue'
import Orders from '../views/Orders/Orders.vue'
import Createorders from '../views/Orders/Createorders.vue'
import Editorders from '../views/Orders/Editorders.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createdatabarangs',
    name: 'Createdatabarangs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createdatabarangs
  },
  {
    path: '/editdatabarangs/:id',
    name: 'Editdatabarangs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editdatabarangs
  },
  {
    path: '/detaildatabarangs/:id',
    name: 'Detaildatabarangs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detaildatabarangs
  },
  {
    path: '/suppliers',
    name: 'Suppliers',
    component: Suppliers
  },
  {
    path: '/createsuppliers',
    name: 'Createsuppliers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createsuppliers
  },
  {
    path: '/editsuppliers/:id',
    name: 'Editsuppliers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editsuppliers
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/createorders',
    name: 'Createorders',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createorders
  },
  {
    path: '/editorders/:id',
    name: 'Editorders',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editorders
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
