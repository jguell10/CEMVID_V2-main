
const routes = [

  {
    path: '/',component: () => import('pages/Login.vue')
  },

  {
    
    path: '/',
    
    component: () => import('layouts/MainLayout.vue'),
    
    children: [
      // {path: '', component: () => import('pages/Login.vue')},
      { path: 'index', component: () => import('pages/Index.vue'),meta:{requiresAuth:true} },
      { path: 'dashboard', component: () => import('pages/dashboard.vue'),meta:{requiresAuth:true} },
      { path: 'listado', component: () => import('pages/ListaVehiculo.vue'),meta:{requiresAuth:true} },
      { path: 'listado2', component: () => import('pages/ListaVehiculo2.vue'),meta:{requiresAuth:true} },
      { path: 'marca', component: () => import('pages/Marca.vue'),meta:{requiresAuth:true} },
      { path: 'listar-desintegraciones', component: () => import('pages/ListaDesintegraciones.vue'), meta:{ requiresAuth:true } },
      { path: 'listar-sedes', component: () => import('pages/ListaSedes.vue'), meta:{ requiresAuth:true } },
      { path: 'Gestion_operativa', component: () => import('pages/Gestion_operativa.vue'), meta:{ requiresAuth:true } },
      
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes





// let router = new VueRouter({
//   routes: [   {
//         path: '/',component: () => import('pages/Login.vue')
//       },
//       {
        
//         path: '/',
        
//         component: () => import('layouts/MainLayout.vue'),
        
//         children: [
//           // {path: '', component: () => import('pages/Login.vue')},
//           { path: 'index', component: () => import('pages/Index.vue'),meta:{requiresAuth:true} },
//           { path: 'listado', component: () => import('pages/ListaVehiculo.vue'),meta:{requiresAuth:true} }
//         ]
//     },]
// })

// function existToken() {
//   var peticiontoken = sessionStorage.getItem("token");
//   return peticiontoken;
// }

// const router = new createRouter({
//   mode: '',
//   base: process.env.BASE_URL,
//   routes
// })





// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     const token = sessionStorage.getItem('token');
//     if (token) {
//       next();
//     } else {
//       next('/');
//     }
//   } else {
//     next();
//   }
// });


//export default router