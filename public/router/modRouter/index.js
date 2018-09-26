let defaultRouter = [
  {
    path: '/',
    name: 'home',
    component: resolve => {
      require(['../../views/index.vue'], resolve)
    }
  },
  {
    path: '/company',
    name: 'company',
    component: resolve => {
      require(['../../views/company.vue'], resolve)
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
let routers = Array.prototype.concat(defaultRouter)
export default  routers