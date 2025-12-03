<template>
  <q-layout view="lHh LpR lFf">
    <q-header
      reveal
      :class="$q.dark.isActive ? 'header_dark' : 'header_normal'"
    >
      <q-toolbar class="text-white rounded-borders "
       style="background-color:white;
  color: rgb(137, 60, 137);">
        <q-btn
          @click="left = !left"
          color="purple"
          
          dense
          icon="menu"
          class="q-mr-sm"
        />
        <q-btn
          color="purple"
          dense
          icon="logout"
          label="Salir / Cerrar Sesión"
          @click="logoutNotify"
          to="/"
          class="q-ml-sm"
          unelevated
        />

       
      </q-toolbar>
    </q-header>
    <q-drawer
      class="left-navigation "
      show-if-above
      v-model="left"      
      side="left"
      elevated
    >
      <div
        class="full-height" style="color:rgb(99, 99, 91)"
        :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
        
        
      >
        <div style="height: calc(100% - 117px);padding:10px;">
          <q-toolbar style="height: -11px;">
            <q-avatar >
              <img style="border: 3px solid purple;" src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>

            <q-toolbar-title>{{username.toUpperCase()}}</q-toolbar-title>

             
          </q-toolbar>
          
          <q-scroll-area style="height:100%;">
            <q-list padding>
              

              


              <q-item
                active-class="tab-active"
                to="/listado"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="car_repair" />
                </q-item-section>

                <q-item-section>
                  Gestion De Ingresos
                </q-item-section>
              </q-item>


              <q-item
                active-class="tab-active"
                to="/listado2"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="precision_manufacturing" />
                </q-item-section>

                <q-item-section>
                  Gestion De Desintegraciones
                </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                @click="f_mensaje_test()"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="save" />
                </q-item-section>

                <q-item-section>
                  Gestion ambiental
                </q-item-section>
              </q-item>

              <q-item
              active-class="tab-active"
               to="/dashboard"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="admin_panel_settings" />
                </q-item-section>

                <q-item-section>
                  Reportes y consultas
                </q-item-section>
              </q-item>

              <q-item
              active-class="tab-active"
               to="/marca"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="admin_panel_settings" />
                </q-item-section>

                <q-item-section>
                  Administracion
                </q-item-section>
              </q-item> 

              <q-item
              active-class="tab-active"
               to="/Gestion_operativa"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="admin_panel_settings" />
                </q-item-section>

                <q-item-section>
                  Gestion Operativa
                </q-item-section>
              </q-item>                  

            </q-list>
          </q-scroll-area>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height">
            <q-scroll-area class="col q-pr-sm full-height" visible>
              <router-view />
            </q-scroll-area>
          </div>
        </div>
      </q-page>
     
    </q-page-container>
  </q-layout>
</template>

<script>
import Swal from 'sweetalert2'
import { useQuasar } from 'quasar'
const $q = useQuasar()
export default {
  data() {
    return {
      left: false,
      username:''
    };
  },
  created(){
      this.username=localStorage.getItem('nombre');
      // this.username='yordis';
    },
  methods: {
    logoutNotify() {
      localStorage.removeItem("nombre");
      localStorage.removeItem("token");
      this.$q.notify({
        message: "Logged out"
      });
    },
    f_mensaje_test(){

Swal.fire("Modulo en Desarrollo!");
} 
  }
};
</script>

<style>
.q-drawer {
  /*background-image: url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg) !important;*/
  /* background-image: url("/statics/images/lake.jpg") !important; */
  background-size: cover !important;
  background-color: #d1d4d5;
  
}

.drawer_normal {
  background-color: rgba(216, 211, 211, 0.587);
  
}

.drawer_dark {
  background-color: #d1d4d5;

}

.navigation-item {
  border-radius: 5px;
  color: black;
}

.tab-active {
  background-color:white;
  color: rgb(137, 60, 137);
  border: 2px solid rgb(137, 60, 137);
}

body {
  background: #f1f1f1 !important;
}

.header_normal {
  background: linear-gradient(
    145deg,
    rgb(242, 241, 244) 15%,
    rgb(244, 238, 244) 70%
  );
}

.header_dark {
  background: linear-gradient(145deg, rgba(227, 234, 233, 0.851) 15%, rgb(233, 234, 236) 70%);
}
.q-mr-sm{
color:rgb(137,60,137);
}

</style>