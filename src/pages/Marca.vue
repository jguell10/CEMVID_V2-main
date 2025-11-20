<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md"></div>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-card class="my-card text-black" style="width: 100%;">
      <!-- <q-item
        clickable
        v-ripple
        class="rounded-borders"
        :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
      > -->
      <!-- <q-item-section> -->
      <!-- <q-item-label class="text-h6">
        ADMINISTRACION VEHICULO
      </q-item-label> -->
      <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
        <q-btn class="text-h6" flat label="ADMINISTRACION" />
        <q-space />
        <!--
          notice shrink property since we are placing it
          as child of QToolbar
        -->
        <q-tabs v-model="tab" shrink stretch>
          <q-tab name="tab4" label="DESINTEGRADORA " @click="components_1=false;components_2=false;components_3=false;components_4=true;components_5=false;" />
          <q-tab name="tab1" label="MARCAS VEHICULOS" @click="components_1=true;components_2=false;components_3=false;components_4=false;components_5=false;" />
          <q-tab name="tab2" label="COLORES VEHICULOS" @click="components_1=false;components_2=true;components_3=false;components_4=false;components_5=false;" />
          <q-tab name="tab3" label="USUARIOS " @click="components_1=false;components_2=false;components_3=true;components_4=false;components_5=false;" />
          <q-tab name="tab5" label="SEDE" @click="components_1=false;components_2=false;components_3=false;components_4=false;components_5=true;" />
        </q-tabs>
      </q-toolbar>
      <!-- </q-item-section> -->
      <!-- </q-item>   -->
    </q-card>

    <q-card style="width: 100%;" v-show="components_1">
      <q-item clickable v-ripple class="rounded-borders" :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'">
        <q-item-section>
          <q-item-label class="text-h6">MARCAS VEHICULOS</q-item-label>
        </q-item-section>
      </q-item>

      <div class="q-pa-md example-row-mix-and-match">
        <div class="row" style="text-align: center;">
          <div class="col-4">
            <q-card class="my-card">
              <q-card-section>
                <q-btn target="_blank" glossy style="background-color:#f76ff7">{{ new Date().toLocaleString() }}</q-btn>
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Marca" stack-label v-model="marca" />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4">
            <q-card-section>
              <q-img src="../assets/Cemdiv_logo_2.jpg" style="width: 50%;height: auto; align-items: center;"></q-img>
            </q-card-section>
          </div>
        </div>
      </div>

      <q-card-section>
        <div class="row">
          <div class="col-2">
            <q-btn style="background-color:#e241e2;" icon-right="save" label="Guardar" @click="f_guardar_marca()" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card style="width: 100%;" v-show="components_2">
      <q-item clickable v-ripple class="rounded-borders" :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'">
        <q-item-section>
          <q-item-label class="text-h6">COLORES VEHICULOS</q-item-label>
        </q-item-section>
      </q-item>

      <div class="q-pa-md example-row-mix-and-match">
        <div class="row" style="text-align: center;">
          <div class="col-4">
            <q-card class="my-card">
              <q-card-section>
                <q-btn target="_blank" glossy style="background-color:#f76ff7">{{ new Date().toLocaleString() }}</q-btn>
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="color" stack-label v-model="color" />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4">
            <q-card-section>
              <q-img src="../assets/Cemdiv_logo_2.jpg" style="width: 50%;height: auto; align-items: center;"></q-img>
            </q-card-section>
          </div>
        </div>
      </div>

      <q-card-section>
        <div class="row">
          <div class="col-2">
            <q-btn style="background-color:#e241e2;" icon-right="save" label="Guardar" @click="f_guardar_color()" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card style="width: 100%;" v-show="components_3">
      <q-item clickable v-ripple class="rounded-borders" :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'">
        <q-item-section>
          <q-item-label class="text-h6">USUARIOS</q-item-label>
        </q-item-section>
      </q-item>

      <div class="q-pa-md example-row-mix-and-match">
        <div class="row" style="text-align: center;">
          <div class="col-4">
            <q-card class="my-card">
              <q-card-section>
                <q-btn target="_blank" glossy style="background-color:#f76ff7">{{ new Date().toLocaleString() }}</q-btn>
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="numero_documento" stack-label v-model="idfuncionario" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="usuario" stack-label v-model="usuario" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="nombre" stack-label v-model="nombre" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="contraseña" stack-label v-model="pass" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="cargo" stack-label v-model="cargo" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="rol" stack-label v-model="idrol" />
              </q-card-section>
              <q-card-option>
                <q-input standout="bg-purple-3 text-white" label="sede" stack-label v-model="idrol" />
              </q-card-option>
            </q-card>
          </div>
          <div class="col-4">
            <q-card-section>
              <q-img src="../assets/Cemdiv_logo_2.jpg" style="width: 50%;height: auto; align-items: center;"></q-img>
            </q-card-section>
          </div>
        </div>
      </div>

      <q-card-section>
        <div class="row">
          <div class="col-2">
            <q-btn style="background-color:#e241e2;" icon-right="save" label="Guardar" @click="f_guardar_usuario()" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card style="width: 100%;" v-show="components_4">
      <q-item clickable v-ripple class="rounded-borders" :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'">
        <q-item-section>
          <q-item-label class="text-h6">DESINTEGRADORA</q-item-label>
        </q-item-section>
      </q-item>

      <div class="q-pa-md example-row-mix-and-match">
        <div class="row" style="text-align: center;">
          <div class="col-4">
            <q-card class="my-card">
              <q-card-section>
                <q-btn target="_blank" glossy style="background-color:#f76ff7">{{ new Date().toLocaleString() }}</q-btn>
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Nombre" stack-label v-model="idfuncionario" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Razon social" stack-label v-model="usuario" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Direccion" stack-label v-model="nombre" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Persona de contacto" stack-label v-model="pass" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="email" stack-label v-model="pass" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="telefono" stack-label v-model="pass" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="ubicacion" stack-label v-model="pass" />
              </q-card-section>
              <q-card-section>
                <q-uploader
                  label="Habilitación MinTransporte"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  auto-upload="false"
                  hide-upload-btn
                />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4">
            <q-card-section>
              <q-img src="../assets/Cemdiv_logo_2.jpg" style="width: 50%;height: auto; align-items: center;"></q-img>
            </q-card-section>
          </div>
        </div>
      </div>

      <q-card-section>
        <div class="row">
          <div class="col-2">
            <q-btn style="background-color:#e241e2;" icon-right="save" label="Guardar" @click="f_guardar_usuario()" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card style="width: 100%;" v-show="components_5">
      <q-item clickable v-ripple class="rounded-borders" :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'">
        <q-item-section>
          <q-item-label class="text-h6">SEDE</q-item-label>
        </q-item-section>
      </q-item>

      <div class="q-pa-md example-row-mix-and-match">
        <div class="row" style="text-align: center;">
          <div class="col-4">
            <q-card class="my-card">
              <q-card-section>
                <q-btn target="_blank" glossy style="background-color:#f76ff7">{{ new Date().toLocaleString() }}</q-btn>
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Nombre" stack-label v-model="idfuncionario" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Dirección" stack-label v-model="usuario" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="persona contacto" stack-label v-model="nombre" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="email" stack-label v-model="pass" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Telefonos" stack-label v-model="pass" />
              </q-card-section>

              <q-page padding>
                <q-input
                  standout="bg-purple-3 text-white"
                  label="Ubicación"
                  v-model="ubicacion"
                  readonly
                  @click="abrirMapa = true"
                />
                <q-dialog v-model="abrirMapa" persistent>
                  <q-card style="width: 90vw; max-width: 900px; height: 80vh;">
                    <div style="height: calc(80vh - 56px); width: 100%;">
                      <l-map
                        ref="mapRef"
                        style="height: 100%; width: 100%;"
                        :zoom="zoom"
                        :center="center"
                        @click="setMarker"
                      >
                        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <l-marker v-if="marker" :lat-lng="marker" />
                      </l-map>
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cerrar" v-close-popup />
                      <q-btn color="primary" label="Usar ubicación" :disable="!marker" @click="confirmar" />
                    </q-card-actions>
                  </q-card>
                </q-dialog>

              </q-page>

              <q-card-section>
                <q-uploader
                  label="Resolucion Ambiental"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  auto-upload="false"
                  hide-upload-btn
                />
              </q-card-section>

              <q-card-section>
                <q-uploader
                  label="Polizas de Seguros"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  auto-upload="false"
                  hide-upload-btn
                />
              </q-card-section>

              <q-card-section>
                <q-uploader
                  label="Certificados ISO 9001 2015"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  auto-upload="false"
                  hide-upload-btn
                />
              </q-card-section>

              <q-card-section>
                <q-uploader
                  label="Documentos distritales de operación"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  auto-upload="false"
                  hide-upload-btn
                />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4">
            <q-card-section>
              <q-img src="../assets/Cemdiv_logo_2.jpg" style="width: 50%;height: auto; align-items: center;"></q-img>
            </q-card-section>
          </div>
        </div>
      </div>

      <q-card-section>
        <div class="row">
          <div class="col-2">
            <q-btn style="background-color:#e241e2;" icon-right="save" label="Guardar" @click="f_guardar_usuario()" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import { ref, nextTick } from 'vue'

// ✅ Leaflet correcto para Vue 3
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

// Fix del ícono de marcador (evita que se vea roto)
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow
})

export default {
  name: 'Marca',
  components: { LMap, LTileLayer, LMarker },

  data () {
    return {
      // ---- variables para el mapa ----
      abrirMapa: false,
      center: [10.96854, -74.78132],
      zoom: 13,
      marker: null,
      ubicacion: '',

      // ---- variables de tus módulos ----
      value: ref(true),
      tab: ref('mails'),
      secondModel: ref('one'),
      modeldos: ref('one'),
      icon: ref(false),
      bar: ref(false),
      bar2: ref(false),
      toolbar: ref(false),
      text: ref(''),
      model: ref(null),
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      date: ref('2024/02/01'),
      date1: ref('2024/02/01'),

      username: '',
      password: '',
      confirmPassword: '',
      isRegister: false,
      errorMessage: '',
      stateObj: {
        register: {
          name: 'Registrarse',
          message: 'Ya tiene una cuenta? De click aqui para Iniciar Sesion.'
        },
        login: {
          name: 'Iniciar Sesion',
          message: 'Registrarse'
        }
      },

      vehiculo: [],
      headers_vehiculo: [
        { label: '#REGISTRO', field: 'id_ingreso', name: 'id_ingreso', align: 'center' },
        { label: 'PLACA', field: 'placa', name: 'placa', align: 'center' },
        { label: 'FECHA_INGRESO', field: 'fecha_ingreso', name: 'fecha_ingreso', align: 'center' },
        { label: 'LATITUD', field: 'latitud', name: 'latitud', align: 'center' },
        { label: 'LONGITUD', field: 'longitud', name: 'longitud', align: 'center' }
      ],
      rutas: [],
      components_1: true,
      components_2: false,
      components_3: false,
      latitud: '',
      longitud: '',
      idfuncionario: '',
      usuario: '',
      nombre: '',
      pass: '',
      cargo: '',
      id_rol: '',
      nombre_marca: '',
      modelo: '',
      nombre_color: ''
    }
  },

  created () {
    this.username = localStorage.getItem('nombre')
  },

  // 👇 Watch para redibujar el mapa cuando se abre el diálogo
  watch: {
    abrirMapa (val) {
      if (val) {
        nextTick(() => {
          if (this.$refs.mapRef?.leafletObject) {
            this.$refs.mapRef.leafletObject.invalidateSize()
          }
        })
      }
    }
  },

  methods: {
    // === MAPA ===
    setMarker (e) {
      this.marker = e.latlng
    },
    confirmar () {
      if (!this.marker) return
      this.ubicacion = `${this.marker.lat.toFixed(6)}, ${this.marker.lng.toFixed(6)}`
      this.abrirMapa = false
    },

    // === RESTO DE FUNCIONES ===
    ListaDesintegracion () {
      if (this.opcion === 1) {
        this.latitud = ''
        this.longitud = ''
        this.numero_documento = ''
        this.nombre_funcionario = ''
        this.numero_chasis = ''
        this.numero_motor = ''
        this.tipo_vehiculo = ''
        this.marca = ''
        this.modelo = ''
        this.color = ''

        let datos = { placa: this.placa }
        axios.post('https://cemvid.ibingcode.com/public/consultarplacas', datos).then(result => {
          this.vehiculo = result.data
          const v = result.data[0]
          this.latitud = v.latitud
          this.longitud = v.longitud
          this.numero_documento = v.numero_documento
          this.nombre_funcionario = v.nombre_funcionario
          this.numero_chasis = v.numero_chasis
          this.numero_motor = v.numero_motor
          this.tipo_vehiculo = v.tipo_vehiculo
          this.marca = v.marca
          this.modelo = v.modelo
          this.color = v.color
        })
      } else {
        let datos = { fecha_inicio: this.date, fecha_fin: this.date1 }
        axios.post('https://cemvid.ibingcode.com/public/listarIngresos', datos).then(result => {
          this.vehiculo = result.data === '' ? [] : result.data
          this.latitud = result.data[0].latitud
          this.longitud = result.data[0].longitud
        })
      }
    },

    f_guardar_marca () {
      let datos = { nombre_marca: this.marca }
      axios.post('https://cemvid.ibingcode.com/public/guardar_marca', datos).then(result => {
        const msg = JSON.parse(result.data)
        if (msg.CODIGO === 0) {
          Swal.fire({
            title: 'ÉXITO',
            text: 'Registro Guardado Correctamente',
            icon: 'success'
          })
        } else {
          Swal.fire({ title: 'FALLO', text: 'Error al guardar registro', icon: 'error' })
        }
      })
    },

    f_guardar_color () {
      let datos = { nombre_color: this.color }
      axios.post('https://cemvid.ibingcode.com/public/guardar_color', datos).then(result => {
        const msg = JSON.parse(result.data)
        if (msg.CODIGO === 0) {
          Swal.fire({
            title: 'ÉXITO',
            text: 'Registro Guardado Correctamente',
            icon: 'success'
          })
        } else {
          Swal.fire({ title: 'FALLO', text: 'Error al guardar registro', icon: 'error' })
        }
      })
    },

    f_guardar_usuario () {
      let datos = {
        idfuncionario: this.idfuncionario,
        usuario: this.usuario,
        nombre: this.nombre,
        pass: this.pass,
        cargo: this.cargo,
        id_rol: this.idrol
      }
      axios.post('https://cemvid.ibingcode.com/public/guardar_usuario', datos).then(result => {
        const msg = JSON.parse(result.data)
        if (msg.CODIGO === 0) {
          Swal.fire({
            title: 'ÉXITO',
            text: 'Registros Guardados Correctamente',
            icon: 'success'
          })
        } else {
          Swal.fire({ title: 'FALLO', text: 'Error al guardar registros', icon: 'error' })
        }
      })
    },

    f_mensaje_test () {
      Swal.fire('Funcionalidad en desarrollo!')
    }
  }
}
</script>

<style scoped>
.my-custom-toggle {
  border: 1px solid #027be3
}
.hero {
  background: url('../assets/Cemdiv_logo_2.jpg');
  background-repeat: no-repeat;
  height: 23vh;
}
</style>