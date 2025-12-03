<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md"></div>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-card class="my-card text-black" style="width: 100%" v-show="components">
  <q-item
    clickable
    v-ripple
    class="rounded-borders"
    :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
  >
    <q-item-section>
      <q-item-label class="text-h6"> GESTION DE INGRESOS </q-item-label>
    </q-item-section>
  </q-item>

  <!-- Fila que contiene las 2 secciones lado a lado -->
  <div class="row q-col-gutter-md q-pa-md">
    <!-- Sección 1: texto + toggle -->
    
    <q-card-section
      class="col-6 col-md-3 "
      :class="$q.dark.isActive ? 'text-white' : 'text-black'"      
    >

      <q-toggle
      
        v-model="value"
        color="purple"
        text-color="black"
        icon="check"
        
        :label="value ? 'Búsqueda por Placa' : 'Búsqueda por Fecha'"
        :left-label="!value"
        @click="fonctionTest()"
      />
    </q-card-section>

    <!-- Sección 2: filtros de placa / fechas -->
    <q-card-section class="col-12 col-md-9">
      <div class="row q-col-gutter-md">
        <div class="q-pa-md col-12 col-sm-3" v-show="components_7">
          <q-input
          dense filled
            standout="bg-purple-3 text-white"
            v-model="placa"
            label="PLACA"
          />
        </div>

        <div class="q-pa-md col-12 col-sm-4" v-show="components_8">
          <q-input dense filled v-model="date" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="date" color="purple">
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        label="Close"
                        color="purple"
                        flat
                      />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="q-pa-md col-12 col-sm-4" v-show="components_8">
          <q-input dense filled v-model="date1" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="date1" color="purple">
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        label="Close"
                        color="purple"
                        flat
                      />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="q-pa-md q-gutter-sm">
          <q-btn
            round
            color="purple"
            glossy
            icon="search"
            @click="
              ListaDesintegracion();
              components_1 = true;
            "
          />
        </div>
      </div>
    </q-card-section>
  </div>
</q-card>

    <!-- <q-card  class="my-card text-black" style="width: 100%" v-show="components">
      <q-item
        clickable
        v-ripple
        class="rounded-borders"
        :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
      >
        <q-item-section>
          <q-item-label class="text-h6"> GESTION DE INGRESOS </q-item-label>
        </q-item-section>
        
      </q-item>
      

      <q-card-section :class="$q.dark.isActive ? 'text-white' : 'text-black'">
        
        Busqueda Por Fecha
        <q-toggle
          v-model="value"
          color="purple "
          text-color="black"
          icon="check"
          label="Busquedad Por Placa"
          @click="fonctionTest()"
        ></q-toggle>
      </q-card-section>
      
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-3" v-show="components_7">
            <q-input
              standout="bg-purple-3 text-white"
              v-model="placa"
              label="PLACA"
            />
          </div>

          <div class="q-pa-md" style="max-width: 300px" v-show="components_8">
            <q-input dense filled v-model="date" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date" color="purple">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="purple"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="q-pa-md" style="max-width: 300px" v-show="components_8">
            <q-input dense filled v-model="date1" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date1" color="purple">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="purple"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="q-pa-md q-gutter-sm">
            <q-btn
              round
              color="purple"
              glossy
              icon="search"
              @click="
                ListaDesintegracion();
                components_1 = true;
                "
            ></q-btn>
        </div>



        </div>

        
      </q-card-section>
    </q-card> -->
    <q-card style="width: 100%" v-show="components_1">
      <div class="q-pa-md">
        <q-table
        v-if="vehiculo.length"
          :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
          :rows="vehiculo"
          :columns="headers_vehiculo"
          row-key="name"
          @row-click="DetalleDesintegracion"
          rows-per-page-label="Registros por página"
          rows-per-page="15"
          
        ></q-table>
        <q-banner
  v-else-if="sinResultados"
  class="q-mt-md bg-grey-2 text-grey-8"
>
  No existen registros para los filtros seleccionados.
</q-banner>
      </div>
    </q-card>

    <q-card style="width: 100%" v-show="components_2">
  <q-item
    clickable
    v-ripple
    class="rounded-borders"
    :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
  >
    <q-item-section>
      <q-item-label class="text-h6"> MODULO 2 </q-item-label>
    </q-item-section>

    <q-btn
      color="purple"
      glossy
      icon="arrow_back"
      @click="
        components_2 = false;
        components = true;
        paso = 1;
      "
    />
  </q-item>

  <!-- PASO 1: DATOS DEL VEHÍCULO -->
  <q-card-section v-if="paso === 1">
    <div class="q-pa-md example-row-mix-and-match">
      <div class="row" style="text-align: center">
        <div class="col-4">
          <q-card class="my-card">
            <q-card-section>
              <q-btn target="_blank" glossy style="background-color: #f76ff7">
                {{ new Date().toLocaleString() }}
              </q-btn>
            </q-card-section>

            <q-card-section>
              <q-field
                standout="bg-purple-3 text-white"
                label="Numero de documento"
                stack-label
              >
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">
                    {{ numero_documento }}
                  </div>
                </template>
              </q-field>
            </q-card-section>

            <q-card-section>
              <q-field
                standout="bg-purple-3 text-white"
                label="Placa del vehiculo"
                stack-label
              >
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">
                    {{ placa.toUpperCase() }}
                  </div>
                </template>
              </q-field>
            </q-card-section>

            <q-card-section>
              <q-field
                standout="bg-purple-3 text-white"
                label="Numero de motor"
                stack-label
              >
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">
                    {{ numero_motor }}
                  </div>
                </template>
              </q-field>
            </q-card-section>

            <q-card-section>
              <q-field
                standout="bg-purple-3 text-white"
                label="Numero de chasis"
                stack-label
              >
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">
                    {{ numero_chasis }}
                  </div>
                </template>
              </q-field>
            </q-card-section>           

            <q-card-section>
              <q-field
                standout="bg-purple-3 text-white"
                label="Numero de VIN"
                stack-label
              >
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">
                    {{ vin }}
                  </div>
                </template>
              </q-field>
            </q-card-section>

            <q-card-section>
              <q-field
                standout="bg-purple-3 text-white"
                label="Propietario"
                stack-label
              >
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">
                    {{ propietario }}
                  </div>
                </template>
              </q-field>
            </q-card-section>

          </q-card>
        </div>

        <div class="col-4">
          <q-card-section>
            <q-img
              src="../assets/Cemdiv_logo_2.jpg"
              style="width: 50%; height: auto; align-items: center"
            />
          </q-card-section>
        </div>

        <div class="col-4">
          <q-card class="my-card">
            <q-card-section>
              <q-btn target="_blank" glossy style="background-color: #f76ff7">
                {{ latitud }} - {{ longitud }}
              </q-btn>
            </q-card-section>          

            <q-card-section>
              <q-select
                standout="bg-purple-3 text-white"
                label="Tipo de servicio"
                stack-label
                v-model="tipo_servicio"
                :options="[
                  'PARTICULAR',
                  'PÚBLICO',
                  'OFICIAL',
                  'ESPECIAL',
                  'DIPLOMÁTICO'
                ]"
              />
            </q-card-section>

            <q-card-section>
              <q-input
                standout="bg-purple-3 text-white"
                label="Número de ejes"
                stack-label
                v-model="numero_ejes"
              />
            </q-card-section>

            <q-card-section>
              <q-input
                standout="bg-purple-3 text-white"
                label="Línea"
                stack-label
                v-model="linea"
              />
            </q-card-section>            

            <q-card-section>
              <q-select
                standout="bg-purple-3 text-white"
                label="Siniestro"
                stack-label
                v-model="siniestro"
                :options="[
                  { label: 'Sí', value: 'SI' },
                  { label: 'No', value: 'NO' }
                ]"
                emit-value
                map-options
              />
            </q-card-section>

            <!--
             <q-btn
              label="Apoderado"
              color="purple"
              class="full-width"
              @click="abrirVentana = true"
            />
             
            <q-dialog v-model="abrirVentana">
              <q-card style="width: 350px; max-width: 90vw;">
                <q-card-section class="text-h6">
                  Datos adicionales
                </q-card-section>

                <q-card-section>
                  <q-input v-model="campo1" label="Dato 1" dense />
                  <q-input v-model="campo2" label="Dato 2" dense class="q-mt-sm" />
                  <q-input v-model="campo3" label="Dato 3" dense class="q-mt-sm" />
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="Cancelar" color="negative" @click="abrirVentana = false" />
                  <q-btn flat label="Guardar" color="positive" @click="guardarDatos" />
                </q-card-actions>
              </q-card>
            </q-dialog>

             -->








          </q-card>
        </div>
      </div>
    </div>

    <!-- NAVEGACIÓN PASO 1 -->
    <div class="row justify-end q-mt-xl q-pa-lg">
      <q-btn
        color="purple"
        icon-right="arrow_forward"
        label="SIGUIENTE"
        @click="paso = 2"
      />
    </div>
  </q-card-section>

  <!-- PASO 2: MULTIMEDIA -->
  <q-card-section v-else-if="paso === 2">
    <div class="q-pa-md">
      <div class="q-col-gutter-md row items-start">
        <div
          v-for="ruta in rutas"
          :key="ruta.ruta"
          class="col-4"
        >
          <!-- IMAGEN -->
          <div v-if="!ruta.ruta.toLowerCase().endsWith('.mp4')">
            <q-img
              :src="'https://soportescemvid.ibingcode.com/' + ruta.ruta"
              :ratio="16 / 9"
              style="border: 3px solid purple; border-radius: 10px"
            />

            <!-- Nombre del archivo -->
            <q-item-label style="text-align: center; font-weight: 600">
              <q-chip dense>
                <q-avatar
                  icon="bookmark"
                  class="glossy"
                  style="background-color: #f76ff7"
                  text-color="white"
                />
              </q-chip>
              {{ ruta.ruta.split('/').pop().split('.')[0] }}
            </q-item-label>

            <!-- CHULITO VERDE -->
            <div style="text-align: center; margin-top: 4px;">
              <q-chip
                color="green-5"
                text-color="white"
                icon="check_circle"
                dense
                class="glossy"
              >
                Archivo verificado
              </q-chip>
            </div>
          </div>

          <!-- VIDEO -->
          <div v-else>
            <q-video
              :src="'https://soportescemvid.ibingcode.com/' + ruta.ruta"
              :ratio="16 / 9"
              style="border: 3px solid purple; border-radius: 10px"
            />

            <!-- Nombre del archivo -->
            <q-item-label style="text-align: center; font-weight: 600">
              <q-chip dense>
                <q-avatar
                  icon="bookmark"
                  class="glossy"
                  style="background-color: #f76ff7"
                  text-color="white"
                />
              </q-chip>
              {{ ruta.ruta.split('/').pop().split('.')[0] }}
            </q-item-label>

            <!-- CHULITO VERDE -->
            <div style="text-align: center; margin-top: 4px;">
              <q-chip
                color="green-5"
                text-color="white"
                icon="check_circle"
                dense
                class="glossy"
              >
                Archivo verificado
              </q-chip>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NAVEGACIÓN PASO 2 -->
    <div class="row justify-between q-mt-xl q-pa-lg" style="width: 100%;">
      <q-btn
        color="purple"
        icon="arrow_back"
        label="ATRÁS"
        @click="paso = 1"
      />
      <q-btn
        color="purple"
        icon-right="arrow_forward"
        label="SIGUIENTE"
        @click="paso = 3"
      />
    </div>
    </q-card-section>

    <!-- PASO 3: BOTONERA FINAL -->

        <!-- PASO 3: BOTONERA FINAL -->
      <q-card-section v-if="paso === 3">

        <div class="q-pa-md example-row-mix-and-match">
        <div class="row" style="text-align: center;">
        <div class="col-4">
        

            <q-card-section>
                <q-uploader
                  label="Contratos activos"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                  field-name="iso_9001"
                  :form-fields="[
                    { name: 'id_desintegradora', value: id_desintegradora },
                    { name: 'placa', value: placa }
                  ]"
                />                
              </q-card-section>

              <q-card-section>
                <q-uploader
                  label="Certificado revisión técnica"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                  field-name="iso_9001"
                  :form-fields="[
                    { name: 'id_desintegradora', value: id_desintegradora },
                    { name: 'placa', value: placa }
                  ]"
                />
                <q-card-section>
                  <q-input
                    standout="bg-purple-3 text-white"
                    label="Fecha de emision"
                    stack-label
                    v-model="fecha_vencimiento_iso"
                    type="date"
                  />
                </q-card-section>                
              </q-card-section>
              

              
              </div>

              <div class="col-4">

                <q-card-section>
                <q-uploader
                  label="Certificado de tradición"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                  field-name="iso_9001"
                  :form-fields="[
                    { name: 'id_desintegradora', value: id_desintegradora },
                    { name: 'placa', value: placa }
                  ]"
                />                
              </q-card-section>

              </div>



              <div class="col-4">

              <q-card-section>
                <q-uploader
                  label="Carta de Autorización"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                  field-name="iso_9001"
                  :form-fields="[
                    { name: 'id_desintegradora', value: id_desintegradora },
                    { name: 'placa', value: placa }
                  ]"
                />                
              </q-card-section>

              <q-card-section>
                <q-uploader
                  label="Licencia de transito"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                  field-name="iso_9001"
                  :form-fields="[
                    { name: 'id_desintegradora', value: id_desintegradora },
                    { name: 'placa', value: placa }
                  ]"
                />                
              </q-card-section>

              <q-card-section v-if="mostrarSijin">
                <q-uploader
                  label="SIJIN"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                  field-name="sijin"
                  :form-fields="[
                    { name: 'id_desintegradora', value: id_desintegradora },
                    { name: 'placa', value: placa }
                  ]"
                />                
              </q-card-section>






            <!-- GENERAR ACTA -->
            
          </div>

          
        </div>
            <div class="row justify-center">
                <q-btn>
                  <img
                    src="../assets/descargar_archivo.png"
                    @click="f_generardocumento()"
                    style="width: 50px; height: 50px"
                  />
                  <q-tooltip transition-show="rotate" transition-hide="rotate">
                    GENERAR ACTA
                  </q-tooltip>
                </q-btn>
              </div>
        </div>

        <!-- NAVEGACIÓN PASO 3 -->
        <div class="row justify-between q-mt-xl q-pa-lg" style="width: 100%;">
          <q-btn
            color="purple"
            icon="arrow_back"
            label="ATRÁS"
            @click="paso = 2"
          />
        </div>
      </q-card-section>

  
      </q-card> 
        <q-card-section v-if="mostrarMultimedia">
          
        </q-card-section>



                              <!-- <div class="row">
                              <div class="col"> -->
      <q-card-section>
        <div class="row">
          <div class="col">
            

            <q-btn v-show="components_6">
              <img
                src="../assets/download.png"
                @click="f_descarga_soporte()"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                DESCARGAR ARCHIVOS
              </q-tooltip>
            </q-btn>

            <q-btn v-show="components_3">
              <img
                src="../assets/descargar_archivo.png"
                @click="f_generardocumento()"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                GENERAR ACTA
              </q-tooltip>
            </q-btn>
            
          </div>
          <div class="col">
            <q-btn v-show="components_4">
              <img
                src="../assets/comprobado.png"
                @click="aprobaregistro()"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                APROBAR
              </q-tooltip>
            </q-btn>
            <q-btn v-show="components_5">
              <img
                src="../assets/rechazar.png"
                @click="
                  components_3 = false;
                  components_4 = false;
                  components_5 = false;
                  components_6 = false;
                "
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                RECHAZAR
              </q-tooltip>
            </q-btn>
          </div>
          <!-- <div class="col">


          <q-btn  style="margin-left: 10px;" color="purple" glossy   @click="components_2=false;components_9=true;">MODULO 3</q-btn>



            <q-btn  style="margin-left: 10px;" color="purple" glossy   @click="components_2=false;components_10=true;components_11=false">MODULO 4</q-btn> 

    

            <q-btn  style="margin-left: 10px;" color="purple" glossy   @click="components_2=false;components_10=false;components_11=true">MODULO 5</q-btn>

           </div> -->

           <q-card-section v-if="paso === 1">
        <!-- aquí va todo lo que hoy es tu primera vista: datos, formulario, etc. -->

            
          </q-card-section>

          <q-card-section v-if="paso === 2">
            <!-- aquí todo tu contenido de multimedia -->
            <!-- grid de imágenes / videos + botones ATRÁS y SIGUIENTE -->

            
          </q-card-section>
        </div>
      </q-card-section>
       <!-- </div>
       </div> -->

    

    <q-card style="width: 100%" v-show="components_9">
      <q-item
        clickable
        v-ripple
        class="rounded-borders"
        :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
      >
        <q-item-section>
          <q-item-label class="text-h6"> MODULO 3 </q-item-label>
        </q-item-section>

        <q-btn
          color="purple"
          glossy
          icon="arrow_back"
          @click="
            components_2 = false;
            components_9 = false;
            components_10 = false;
            components = true;
          "
        ></q-btn>
      </q-item>

      <div class="q-pa-md example-row-mix-and-match">
        <div class="row" style="text-align: center">
          <div class="col-4">
            <q-card class="my-card">
              <q-card-section>
                <q-btn
                  target="_blank"
                  glossy
                  style="background-color: #f76ff7"
                  >{{ new Date().toLocaleString() }}</q-btn
                >
              </q-card-section>

              <q-card-section>
                <q-input
                  standout="bg-purple-3 text-white"
                  label="Tipo de Vehiculo"
                  stack-label
                  v-model="tipo_vehiculo"
                />
              </q-card-section>

              <q-card-section>
                <q-input
                  standout="bg-purple-3 text-white"
                  label="Marca"
                  stack-label
                  v-model="marca"
                />
              </q-card-section>
            </q-card>
          </div>

          <div class="col-4">
            <q-card-section>
              <q-img
                src="../assets/Cemdiv_logo_2.jpg"
                style="width: 50%; height: auto; align-items: center"
              ></q-img>
            </q-card-section>
          </div>

          <div class="col-4">
            <q-card class="my-card">
              <q-card-section>
                <q-btn target="_blank" glossy style="background-color: #f76ff7"
                  >{{ latitud }} - {{ longitud }}</q-btn
                >
              </q-card-section>
              <q-card-section>
                <q-input
                  standout="bg-purple-3 text-white"
                  label="Modelo"
                  stack-label
                  v-model="modelo"
                />
              </q-card-section>

              <q-card-section>
                <q-input
                  standout="bg-purple-3 text-white"
                  label="Color"
                  stack-label
                  v-model="color"
                />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <div class="q-pa-md">
        <div class="q-col-gutter-md row items-start">
          <!-- <div  class="col-4">
        <q-chip dense color="pink" text-color="white" icon="bookmark">
        Video #1
      </q-chip>
        <q-video  
      :ratio="16/9"
      src="https://www.youtube.com/embed/2zd8RrvjksY?si=WXcUyHi6u6_wn9gc"      
    ></q-video>
  </div> -->
          <!-- <div v-for="ruta in 3" :key="ruta" class="col-4">{{rutas}} -->
          <div
            v-for="(ruta, index) in rutas"
            v-bind:key="ruta.ruta"
            class="col-4"
          >
            <div v-if="index >= 4 && index < 6">
              <q-img
                :src="'https://soportescemvid.ibingcode.com/' + ruta.ruta"
                :ratio="16 / 9"
                style="border: 3px solid purple; border-radius: 10px"
              ></q-img>

              <q-item-label
                v-if="index == 4"
                style="text-align: center; font-weight: 600"
                ><q-chip dense
                  ><q-avatar
                    icon="bookmark"
                    class="glossy"
                    style="background-color: #f76ff7"
                    text-color="white"
                  ></q-avatar></q-chip
                >{{ ruta.ruta.split("/")[2].split(".")[0] }}</q-item-label
              >
              <q-item-label
                v-if="index == 5"
                style="text-align: center; font-weight: 600"
                ><q-chip dense
                  ><q-avatar
                    icon="bookmark"
                    class="glossy"
                    style="background-color: #f76ff7"
                    text-color="white"
                  ></q-avatar></q-chip
                >{{ ruta.ruta.split("/")[2].split(".")[0] }}</q-item-label
              >
            </div>
          </div>
        </div>
      </div>

      
    </q-card>

    <q-card style="width: 100%" v-show="components_10">
      <q-item
        clickable
        v-ripple
        class="rounded-borders"
        :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
      >
        <q-item-section>
          <q-item-label class="text-h6"> MODULO 4 </q-item-label>
        </q-item-section>

        <q-btn
          color="purple"
          glossy
          icon="arrow_back"
          @click="
            components_2 = false;
            components_9 = false;
            components_10 = false;
            components_11 = false;
            components = true;
          "
        ></q-btn>
      </q-item>

      <div class="q-pa-md example-row-mix-and-match">
        <div class="row" style="text-align: center">
          <div class="col-4">
            <q-card class="my-card" style="margin-top: 90px">
              <q-card-section>
                <q-btn
                  target="_blank"
                  glossy
                  style="background-color: #f76ff7"
                  >{{ new Date().toLocaleString() }}</q-btn
                >
              </q-card-section>
            </q-card>
          </div>

          <div class="col-4">
            <q-card-section>
              <q-img
                src="../assets/Cemdiv_logo_2.jpg"
                style="width: 50%; height: auto; align-items: center"
              ></q-img>
            </q-card-section>
          </div>

          <div class="col-4">
            <q-card class="my-card" style="margin-top: 90px">
              <q-card-section>
                <q-btn target="_blank" glossy style="background-color: #f76ff7"
                  >{{ latitud }} - {{ longitud }}</q-btn
                >
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <div
        class="q-pa-md row items-start q-gutter-md"
        style="align-content: center"
      ></div>
      <div class="q-pa-md">
        <div class="q-col-gutter-md row items-start">
          <!-- <div  class="col-4">
        <q-chip dense color="pink" text-color="white" icon="bookmark">
        Video #1
      </q-chip>
        <q-video  
      :ratio="16/9"
      src="https://www.youtube.com/embed/2zd8RrvjksY?si=WXcUyHi6u6_wn9gc"      
    ></q-video>
  </div> -->
          <!-- <div v-for="ruta in 3" :key="ruta" class="col-4">{{rutas}} -->
          <div
            v-for="(ruta, index) in rutas"
            v-bind:key="ruta.ruta"
            class="col-4"
          >
            <div v-if="index >= 6 && index < 12">
              <q-img
                :src="'https://soportescemvid.ibingcode.com/' + ruta.ruta"
                :ratio="16 / 9"
                style="border: 3px solid purple; border-radius: 10px"
              ></q-img>

              <q-item-label
                v-if="index == 6"
                style="text-align: center; font-weight: 600"
                ><q-chip dense
                  ><q-avatar
                    icon="bookmark"
                    class="glossy"
                    style="background-color: #f76ff7"
                    text-color="white"
                  ></q-avatar></q-chip
                >{{ ruta.ruta.split("/")[2].split(".")[0] }}</q-item-label
              >
              <q-item-label
                v-if="index == 7"
                style="text-align: center; font-weight: 600"
                ><q-chip dense
                  ><q-avatar
                    icon="bookmark"
                    class="glossy"
                    style="background-color: #f76ff7"
                    text-color="white"
                  ></q-avatar></q-chip
                >{{ ruta.ruta.split("/")[2].split(".")[0] }}</q-item-label
              >
              <q-item-label
                v-if="index == 8"
                style="text-align: center; font-weight: 600"
                ><q-chip dense
                  ><q-avatar
                    icon="bookmark"
                    class="glossy"
                    style="background-color: #f76ff7"
                    text-color="white"
                  ></q-avatar></q-chip
                >{{ ruta.ruta.split("/")[2].split(".")[0] }}</q-item-label
              >
              <q-item-label
                v-if="index == 9"
                style="text-align: center; font-weight: 600"
                ><q-chip dense
                  ><q-avatar
                    icon="bookmark"
                    class="glossy"
                    style="background-color: #f76ff7"
                    text-color="white"
                  ></q-avatar></q-chip
                >{{ ruta.ruta.split("/")[2].split(".")[0] }}</q-item-label
              >
              <q-item-label
                v-if="index == 10"
                style="text-align: center; font-weight: 600"
                ><q-chip dense
                  ><q-avatar
                    icon="bookmark"
                    class="glossy"
                    style="background-color: #f76ff7"
                    text-color="white"
                  ></q-avatar></q-chip
                >{{ ruta.ruta.split("/")[2].split(".")[0] }}</q-item-label
              >
              <q-item-label
                v-if="index == 11"
                style="text-align: center; font-weight: 600"
                ><q-chip dense
                  ><q-avatar
                    icon="bookmark"
                    class="glossy"
                    style="background-color: #f76ff7"
                    text-color="white"
                  ></q-avatar></q-chip
                >{{ ruta.ruta.split("/")[2].split(".")[0] }}</q-item-label
              >
            </div>
          </div>
        </div>
      </div>

      <q-card-section>
        <div class="row">
          <div class="col">
            <q-btn>
              <img
                src="../assets/load_nube.png"
                @click="toolbar = true"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                SUBIR ARCHIVOS
              </q-tooltip>
            </q-btn>

            <q-btn v-show="components_6">
              <img
                src="../assets/download.png"
                @click="f_descarga_soporte()"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                DESCARGAR ARCHIVOS
              </q-tooltip>
            </q-btn>

            <q-btn v-show="components_3">
              <img
                src="../assets/descargar_archivo.png"
                @click="f_generardocumento()"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                GENERAR ACTA
              </q-tooltip>
            </q-btn>
            <q-btn>
              <img
                src="../assets/Reporte_excel.png"
                @click="f_mensaje_test()"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                REPORTE EXCEL
              </q-tooltip>
            </q-btn>
          </div>
          <div class="col">
            <q-btn v-show="components_4">
              <img
                src="../assets/comprobado.png"
                @click="aprobaregistro()"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                APROBAR
              </q-tooltip>
            </q-btn>
            <q-btn v-show="components_5">
              <img
                src="../assets/rechazar.png"
                @click="
                  components_3 = false;
                  components_4 = false;
                  components_5 = false;
                  components_6 = false;
                "
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                RECHAZAR
              </q-tooltip>
            </q-btn>
          </div>
          <div class="col">
            <q-btn
              style="margin-left: 30px"
              color="purple"
              glossy
              @click="
                components_2 = true;
                components_10 = false;
                components_11 = false;
              "
              >MODULO 2</q-btn
            >
          </div>
          <div class="col">
            <q-btn
              style="margin-left: 30px"
              color="purple"
              glossy
              @click="
                components_9 = true;
                components_10 = false;
                components_11 = false;
              "
              >MODULO 3</q-btn
            >
          </div>

          <div class="col">
            <q-btn
              style="margin-left: 30px"
              color="purple"
              glossy
              @click="
                components_9 = false;
                components_10 = false;
                components_11 = true;
              "
              >MODULO 5</q-btn
            >
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card style="width: 100%" v-show="components_11">
      <q-item
        clickable
        v-ripple
        class="rounded-borders"
        :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
      >
        <q-item-section>
          <q-item-label class="text-h6"> MODULO 5 </q-item-label>
        </q-item-section>

        <q-btn
          color="purple"
          glossy
          icon="arrow_back"
          @click="
            components_2 = false;
            components_9 = false;
            components_10 = false;
            components_11 = false;
            components = true;
          "
        ></q-btn>
      </q-item>

      <div class="q-pa-md example-row-mix-and-match">
        <div class="row" style="text-align: center">
          <div class="col-4">
            <q-card class="my-card" style="margin-top: 90px">
              <q-card-section>
                <q-btn
                  target="_blank"
                  glossy
                  style="background-color: #f76ff7"
                  >{{ new Date().toLocaleString() }}</q-btn
                >
              </q-card-section>
            </q-card>
          </div>

          <div class="col-4">
            <q-card-section>
              <q-img
                src="../assets/Cemdiv_logo_2.jpg"
                style="width: 50%; height: auto; align-items: center"
              ></q-img>
            </q-card-section>
          </div>

          <div class="col-4">
            <q-card class="my-card" style="margin-top: 90px">
              <q-card-section>
                <q-btn target="_blank" glossy style="background-color: #f76ff7"
                  >{{ latitud }} - {{ longitud }}</q-btn
                >
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <div
        class="q-pa-md row items-start q-gutter-md"
        style="align-content: center"
      ></div>
      <div class="q-pa-md">
        <div class="q-col-gutter-md row items-start">
          <!-- <div  class="col-4">
        <q-chip dense color="pink" text-color="white" icon="bookmark">
        Video #1
      </q-chip>
        <q-video  
      :ratio="16/9"
      src="https://www.youtube.com/embed/2zd8RrvjksY?si=WXcUyHi6u6_wn9gc"      
    ></q-video>
  </div> -->
          <!-- <div v-for="ruta in 3" :key="ruta" class="col-4">{{rutas}} -->
          <div
            v-for="(ruta, index) in rutas"
            v-bind:key="ruta.ruta"
            class="col-4"
          >
            <div v-if="index >= 12 && index < 15">
              <q-img
                :src="'https://soportescemvid.ibingcode.com/' + ruta.ruta"
                :ratio="16 / 9"
                style="border: 3px solid purple; border-radius: 10px"
              ></q-img>

              <q-item-label
                v-if="index == 12"
                style="text-align: center; font-weight: 600"
                ><q-chip dense
                  ><q-avatar
                    icon="bookmark"
                    class="glossy"
                    style="background-color: #f76ff7"
                    text-color="white"
                  ></q-avatar></q-chip
                >{{ ruta.ruta.split("/")[2].split(".")[0] }}</q-item-label
              >
              <q-item-label
                v-if="index == 13"
                style="text-align: center; font-weight: 600"
                ><q-chip dense
                  ><q-avatar
                    icon="bookmark"
                    class="glossy"
                    style="background-color: #f76ff7"
                    text-color="white"
                  ></q-avatar></q-chip
                >{{ ruta.ruta.split("/")[2].split(".")[0] }}</q-item-label
              >
              <q-item-label
                v-if="index == 14"
                style="text-align: center; font-weight: 600"
                ><q-chip dense
                  ><q-avatar
                    icon="bookmark"
                    class="glossy"
                    style="background-color: #f76ff7"
                    text-color="white"
                  ></q-avatar></q-chip
                >{{ ruta.ruta.split("/")[2].split(".")[0] }}</q-item-label
              >
            </div>

            <div v-if="index == 15">
              <q-video
                :src="'https://soportescemvid.ibingcode.com/' + ruta.ruta"
                :ratio="16 / 9"
                style="border: 3px solid purple; border-radius: 10px"
              ></q-video>

              <q-item-label
                v-if="index == 15"
                style="text-align: center; font-weight: 600"
                ><q-chip dense
                  ><q-avatar
                    icon="bookmark"
                    class="glossy"
                    style="background-color: #f76ff7"
                    text-color="white"
                  ></q-avatar></q-chip
                >{{ ruta.ruta.split("/")[2].split(".")[0] }}</q-item-label
              >
            </div>
          </div>
        </div>
      </div>

      <q-card-section>
        <div class="row">
          <div class="col">
            <q-btn>
              <img
                src="../assets/load_nube.png"
                @click="toolbar = true"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                SUBIR ARCHIVOS
              </q-tooltip>
            </q-btn>

            <q-btn v-show="components_6">
              <img
                src="../assets/download.png"
                @click="f_descarga_soporte()"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                DESCARGAR ARCHIVOS
              </q-tooltip>
            </q-btn>

            <q-btn v-show="components_3">
              <img
                src="../assets/descargar_archivo.png"
                @click="f_generardocumento()"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                GENERAR ACTA
              </q-tooltip>
            </q-btn>
            <q-btn>
              <img
                src="../assets/Reporte_excel.png"
                @click="f_mensaje_test()"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                REPORTE EXCEL
              </q-tooltip>
            </q-btn>
          </div>
          <div class="col">
            <q-btn v-show="components_4">
              <img
                src="../assets/comprobado.png"
                @click="aprobaregistro()"
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                APROBAR
              </q-tooltip>
            </q-btn>
            <q-btn v-show="components_5">
              <img
                src="../assets/rechazar.png"
                @click="
                  components_3 = false;
                  components_4 = false;
                  components_5 = false;
                  components_6 = false;
                "
                style="width: 50px; height: 50px"
              />
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                RECHAZAR
              </q-tooltip>
            </q-btn>
          </div>
          <div class="col">
            <q-btn
              style="margin-left: 30px"
              color="purple"
              glossy
              @click="
                components_2 = true;
                components_10 = false;
                components_11 = false;
              "
              >MODULO 2</q-btn
            >
          </div>
          <div class="col">
            <q-btn
              style="margin-left: 30px"
              color="purple"
              glossy
              @click="
                components_9 = true;
                components_10 = false;
                components_11 = false;
              "
              >MODULO 3</q-btn
            >
          </div>

          <div class="col">
            <q-btn
              style="margin-left: 30px"
              color="purple"
              glossy
              @click="
                components_9 = false;
                components_10 = true;
                components_11 = false;
              "
              >MODULO 4</q-btn
            >
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>

import logoCemdiv from "../assets/logo_prueba.jpg";
import axios from "axios";
import { ref } from "vue";

import Swal from "sweetalert2";
export default {
  name: "App",

  data() {
    return {

      abrirVentana: false,

      campo1: "",
      campo2: "",
      campo3: "",      

      tipo_servicio: null,
      numero_ejes:null,
      linea:null,


      nombre_propietario: "",     // APELLIDOS Y NOMBRE
      tipo_documento: "",         // CC / CE / NIT, etc.
      
      certificacion_sijin: "",    // No. de certificación SIJIN
      fecha_certificado_sijin: "",// Fecha certificado
      
      
      decision: "",               // p.ej. "APROBADO", "RECHAZADO"
      peso_bruto: "",             // si lo manejas
      tipo_postulacion: "",       // campo libre
      observaciones: "",          // texto de observaciones
      generado_por: "",           // quien genera el acta (usuario logueado)





      paso: 1,
      camaraFiles: [],
      logoFiles: [],
      poliza646Files: [],
      rut646Files: [],
      poliza7036Files: [],
      rut7036Files: [],
      isoFiles: [],
      sarlafFiles: [],
      politicaFiles: [],
      fecha_camara_comercio: '',
      fecha_vencimiento_poliza_646: '',
      fecha_vencimiento_rut_646: '',
      fecha_vencimiento_poliza_7036: '',
      fecha_vencimiento_rut_7036: '',
      fecha_vencimiento_iso: '',
      mostrarMultimedia: false,
      value: ref(true),
      v_poder: ref(false),
      v_siniestro: ref(false),
      tab: ref("mails"),
      secondModel: ref("one"),
      modeldos: ref("one"),
      icon: ref(false),
      bar: ref(false),
      bar2: ref(false),
      toolbar: ref(false),
      text: ref(""),
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      date: ref("2024/02/01"),
      date1: ref(new Date().toISOString().slice(0, 10).replace(/-/g, '/')),
      username: "",
      password: "",
      confirmPassword: "",
      isRegister: false,
      errorMessage: "",
      stateObj: {
        register: {
          name: "Registrarse",
          message: "Ya tiene una cuenta? De click aqui para Iniciar Sesion.",
        },
        login: {
          name: "Iniciar Sesion",
          message: "Registrarse",
        },
      },
      vehiculo: [],
    sinResultados: false,
      headers_vehiculo: [
        {
          label: "FECHA_INGRESO",
          field: "fecha_ingreso",
          name: "fecha_ingreso",
          align: "center",
        },
        { label: "PLACA",
          field: "placa",
          name: "placa",
          align: "center" 
        },
        { label: "NUMERO DE MOTOR",
          field: "numero_motor",
          name: "numero_motor",
          align: "center" 
        },
        { label: "NUMERO DE CHASIS",
          field: "numero_chasis",
          name: "numero_chasis",
          align: "center" 
        },
        { label: "SEDE",
          field: "sedes",
          name: "sedes",
          align: "center"
        },     
        { label: "USUARIO",
          field: "usuario",
          name:  "usuario",
          align: "center"
        },
        
                 
        
        
      ],
      rutas: [],
      components: true,
      components_1: true,
      components_2: false,
      components_3: false,
      components_4: false,
      components_5: false,
      components_6: false,
      components_7: true,
      components_8: false,
      components_9: false,
      components_10: false,
      components_11: false,
      components_12: false,
      components_13: false,
      files_0: "",
      files_1: "",
      files_2: "",
      files_3: "",
      files_4: "",
      files_5: "",
      files_6: "",
      placa: "",
      desintegradora: "",
      estado: "",
      numero_registro: "",
      fecha_inicio: "",
      fecha_fin: "",
      opcion: 1,
      codigo_busqueda: "",
      latitud: "",
      longitud: "",
      numero_documento: "",
      nombre_funcionario: "",
      numero_chasis: "",
      numero_motor: "",
      tipo_vehiculo: "",
      marca: "",
      modelo: "",
      color: "",
      siniestro: "",
      propietario: "",
      cod_resolucion:0,
      desc_resolucion: "",
    };
  },

        computed: {
        mostrarSijin() {
          const permitidos = [
            "Motocicleta",
            "Otro tipo de motocicleta",
            "Automoviles",
            "Camperos",
            "Camionetas",
            "Microbus",
            "Busetas",
            "Buses"
          ];
          return permitidos.includes((this.tipo_vehiculo || "").toString().trim());
        }
      },

  created() {
    this.username = localStorage.getItem("nombre");
    this.ListarIngresosTodos();
    // this.username='yordis';
  },
  methods: {

    guardarDatos() {
    console.log(this.campo1, this.campo2, this.campo3);
    this.abrirVentana = false;
  },


    async f_generardocumento () {
  // Carga dinámica de jsPDF
  const { jsPDF } = await import("jspdf");

  

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "letter"
  });

  // Siempre convertir a string
  const S = (v) => (v === undefined || v === null ? "" : String(v));

  const pageWidth  = doc.internal.pageSize.getWidth();
  const marginLeft = 15;
  const marginTop  = 15;
  const tableWidth = pageWidth - marginLeft * 2;

   // 🔹 CARGAR Y PINTAR EL LOGO
  try {
    const img = new Image();
    img.src = logoCemdiv; // importado arriba

    await new Promise((resolve) => {
      img.onload = () => resolve();
      img.onerror = () => resolve(); // si falla, no rompe todo
    });

    // x, y, ancho, alto (ajusta a tu gusto)
    doc.addImage(img, "JPEG", marginLeft, 10, 30, 20);
  } catch (e) {
    console.error("Error cargando logo en PDF:", e);
  }

  // =========================
  // ENCABEZADO
  // =========================
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  doc.text("@NOMBRE_DESINTEGRADORA", pageWidth / 2, marginTop, { align: "center" });

  doc.setFontSize(9);
  doc.text("CODIGO UNICO", marginLeft + tableWidth - 50, marginTop + 8);
  doc.text(S(this.cod_resolucion), marginLeft + tableWidth - 20, marginTop + 8);

  doc.text("PLACA DE VEHICULO", marginLeft + tableWidth - 55, marginTop + 16);
  doc.text(S(this.placa), marginLeft + tableWidth - 15, marginTop + 16);

  // =========================
  // TABLA PRINCIPAL
  // =========================

  let y = marginTop + 25;
  const rowHeight = 7;

  // Título INFORMACION DEL PROPIETARIO
  doc.setFont("helvetica", "bold");
  doc.rect(marginLeft, y, tableWidth, rowHeight);
  doc.text("INFORMACION DEL PROPIETARIO", marginLeft + tableWidth / 2, y + 4.5, { align: "center" });

  y += rowHeight;

  // Fila 1: APELLIDOS / TIPO / NUMERO DOCUMENTO
  const colWidth3 = tableWidth / 3;

  doc.setFont("helvetica", "normal");
  doc.rect(marginLeft, y, colWidth3, rowHeight * 2);
  doc.rect(marginLeft + colWidth3, y, colWidth3, rowHeight * 2);
  doc.rect(marginLeft + colWidth3 * 2, y, colWidth3, rowHeight * 2);

  doc.setFontSize(8);
  doc.text("1. APELLIDOS Y NOMBRE", marginLeft + 2, y + 3);
  doc.text("2. TIPO", marginLeft + colWidth3 + 2, y + 3);
  doc.text("3. NUMERO DE DOCUMENTO", marginLeft + colWidth3 * 2 + 2, y + 3);

  doc.setFontSize(9);
  doc.text(S(this.nombre_propietario), marginLeft + 2, y + 7.5);
  doc.text(S(this.tipo_documento), marginLeft + colWidth3 + 2, y + 7.5);
  doc.text(S(this.numero_documento), marginLeft + colWidth3 * 2 + 2, y + 7.5);

  y += rowHeight * 2;

  // Fila 2: FECHA ACTA / CERTIFICACION SIJIN / FECHA CERTIFICADO
  doc.rect(marginLeft, y, colWidth3, rowHeight * 2);
  doc.rect(marginLeft + colWidth3, y, colWidth3, rowHeight * 2);
  doc.rect(marginLeft + colWidth3 * 2, y, colWidth3, rowHeight * 2);

  doc.setFontSize(8);
  doc.text("4. FECHA DE ACTA", marginLeft + 2, y + 3);
  doc.text("5. CERTIFICACION SIJIN No.", marginLeft + colWidth3 + 2, y + 3);
  doc.text("6. FECHA DEL CERTIFICADO", marginLeft + colWidth3 * 2 + 2, y + 3);

  doc.setFontSize(9);
  const hoy = new Date().toLocaleDateString();
  doc.text(S(hoy), marginLeft + 2, y + 7.5);
  doc.text(S(this.certificacion_sijin), marginLeft + colWidth3 + 2, y + 7.5);
  doc.text(S(this.fecha_certificado_sijin), marginLeft + colWidth3 * 2 + 2, y + 7.5);

  y += rowHeight * 2;

  // Título CARACTERISTICAS DE IDENTIFICACION
  doc.setFont("helvetica", "bold");
  doc.rect(marginLeft, y, tableWidth, rowHeight);
  doc.text("CARACTERISTICAS DE IDENTIFICACION", marginLeft + tableWidth / 2, y + 4.5, { align: "center" });

  y += rowHeight;

  // Fila 3: CLASE / MODELO / VIDEO INGRESO
  doc.setFont("helvetica", "normal");
  doc.rect(marginLeft, y, colWidth3, rowHeight * 2);
  doc.rect(marginLeft + colWidth3, y, colWidth3, rowHeight * 2);
  doc.rect(marginLeft + colWidth3 * 2, y, colWidth3, rowHeight * 2);

  doc.setFontSize(8);
  doc.text("7. CLASE", marginLeft + 2, y + 3);
  doc.text("8. MODELO", marginLeft + colWidth3 + 2, y + 3);
  doc.text("9. VIDEO DE INGRESO", marginLeft + colWidth3 * 2 + 2, y + 3);

  doc.setFontSize(9);
  doc.text(S(this.tipo_vehiculo || this.clase), marginLeft + 2, y + 7.5);
  doc.text(S(this.modelo), marginLeft + colWidth3 + 2, y + 7.5);
  doc.text(S(this.numero_registro), marginLeft + colWidth3 * 2 + 2, y + 7.5);

  y += rowHeight * 2;

  // Fila 4: MARCA / LINEA / DECISION
  doc.rect(marginLeft, y, colWidth3, rowHeight * 2);
  doc.rect(marginLeft + colWidth3, y, colWidth3, rowHeight * 2);
  doc.rect(marginLeft + colWidth3 * 2, y, colWidth3, rowHeight * 2);

  doc.setFontSize(8);
  doc.text("10. MARCA", marginLeft + 2, y + 3);
  doc.text("11. LINEA", marginLeft + colWidth3 + 2, y + 3);
  doc.text("12. DECISION", marginLeft + colWidth3 * 2 + 2, y + 3);

  doc.setFontSize(9);
  doc.text(S(this.marca), marginLeft + 2, y + 7.5);
  doc.text(S(this.linea), marginLeft + colWidth3 + 2, y + 7.5);
  doc.text(S(this.decision), marginLeft + colWidth3 * 2 + 2, y + 7.5);

  y += rowHeight * 2;

  // Fila 5: PESO BRUTO / NUMERO EJES / TIPO SERVICIO
  doc.rect(marginLeft, y, colWidth3, rowHeight * 2);
  doc.rect(marginLeft + colWidth3, y, colWidth3, rowHeight * 2);
  doc.rect(marginLeft + colWidth3 * 2, y, colWidth3, rowHeight * 2);

  doc.setFontSize(8);
  doc.text("13. PESO BRUTO", marginLeft + 2, y + 3);
  doc.text("14. NUMERO DE EJES", marginLeft + colWidth3 + 2, y + 3);
  doc.text("15. TIPO DE SERVICIO", marginLeft + colWidth3 * 2 + 2, y + 3);

  doc.setFontSize(9);
  doc.text(S(this.peso_bruto), marginLeft + 2, y + 7.5);
  doc.text(S(this.numero_ejes), marginLeft + colWidth3 + 2, y + 7.5);
  doc.text(S(this.tipo_servicio), marginLeft + colWidth3 * 2 + 2, y + 7.5);

  y += rowHeight * 2;

  // Fila 6: NUMERO MOTOR / NUMERO CHASIS
  const halfWidth = tableWidth / 2;
  doc.rect(marginLeft, y, halfWidth, rowHeight * 2);
  doc.rect(marginLeft + halfWidth, y, halfWidth, rowHeight * 2);

  doc.setFontSize(8);
  doc.text("16. NUMERO DE MOTOR", marginLeft + 2, y + 3);
  doc.text("17. NUMERO DE CHASIS", marginLeft + halfWidth + 2, y + 3);

  doc.setFontSize(9);
  doc.text(S(this.numero_motor), marginLeft + 2, y + 7.5);
  doc.text(S(this.numero_chasis), marginLeft + halfWidth + 2, y + 7.5);

  y += rowHeight * 2;

  // Fila 7: TIPO DE POSTULACION
  doc.rect(marginLeft, y, tableWidth, rowHeight * 2);
  doc.setFontSize(8);
  doc.text("TIPO DE POSTULACION", marginLeft + 2, y + 3);
  doc.setFontSize(9);
  doc.text(S(this.tipo_postulacion), marginLeft + 2, y + 7.5);

  y += rowHeight * 2;

  // Fila 8: OBSERVACIONES
  doc.rect(marginLeft, y, tableWidth, rowHeight * 3);
  doc.setFontSize(8);
  doc.text("OBSERVACIONES", marginLeft + 2, y + 3);
  doc.setFontSize(9);

  const obs = this.observaciones && this.observaciones.trim().length
    ? this.observaciones
    : "SIN OBSERVACIONES";

  doc.text(S(obs), marginLeft + 2, y + 7.5, { maxWidth: tableWidth - 4 });

  y += rowHeight * 3;

  // Fila 9: GENERADO POR
  doc.rect(marginLeft, y, tableWidth, rowHeight * 2);
  doc.setFontSize(8);
  doc.text("GENERADO POR", marginLeft + 2, y + 3);
  doc.setFontSize(9);
  doc.text(S(this.generado_por || this.username), marginLeft + 2, y + 7.5);

  // =========================
  // FIRMAS AUTORIZADAS
  // =========================

  y += rowHeight * 3;

  doc.rect(marginLeft, y, tableWidth, rowHeight);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("FIRMAS AUTORIZADAS", marginLeft + 2, y + 4.5);

  y += rowHeight;

  // PROPIETARIO / MINISTERIO
  doc.setFont("helvetica", "normal");
  doc.rect(marginLeft, y, halfWidth, rowHeight * 3);
  doc.rect(marginLeft + halfWidth, y, halfWidth, rowHeight * 3);

  doc.setFontSize(8);
  doc.text("PROPIETARIO", marginLeft + 2, y + rowHeight * 3 - 1);
  doc.text("MINISTERIO DE TRANSPORTE", marginLeft + halfWidth + 2, y + rowHeight * 3 - 1);

  y += rowHeight * 3;

  // UNION TEMPORAL / CERTIFICADORA
  doc.rect(marginLeft, y, halfWidth, rowHeight * 3);
  doc.rect(marginLeft + halfWidth, y, halfWidth, rowHeight * 3);

  doc.text("UNION TEMPORAL", marginLeft + 2, y + rowHeight * 3 - 1);
  doc.text("CERTIFICADORA", marginLeft + halfWidth + 2, y + rowHeight * 3 - 1);

  y += rowHeight * 3;

  // FECHA ELABORACION
  doc.rect(marginLeft, y, tableWidth, rowHeight * 2);
  doc.text("FECHA DE ELABORACION:", marginLeft + 2, y + rowHeight * 2 - 1);
  doc.setFontSize(9);
  doc.text(S(hoy), marginLeft + 60, y + rowHeight * 2 - 1);

  // =========================
  // PREVISUALIZACIÓN
  // =========================
  const pdfUrl = doc.output("bloburl");
  window.open(pdfUrl, "_blank");
}

,

    esImagen (ruta) {
    const nombre = ruta.split('/').pop().toLowerCase()
    return (
      nombre.endsWith('.jpg') ||
      nombre.endsWith('.jpeg') ||
      nombre.endsWith('.png') ||
      nombre.endsWith('.gif')
    )
  },

  esVideo (ruta) {
    const nombre = ruta.split('/').pop().toLowerCase()
    return (
      nombre.endsWith('.mp4') ||
      nombre.endsWith('.avi') ||
      nombre.endsWith('.mov') ||
      nombre.endsWith('.mkv') ||
      nombre.endsWith('.webm')
    )
  },

  obtenerNombreArchivo (ruta) {
    return ruta.split('/').pop().split('.')[0]
  },

    volverAtras() {
      this.mostrarMultimedia = false;
    },

    irASiguientePaso () {
      // Si quieres SOLO mostrar multimedia:
      this.mostrarMultimedia = true

      // Si además quieres guardar el siniestro aquí, puedes hacer:
      // this.f_guardar_siniestro()
      // this.mostrarMultimedia = true
    },

    ListarIngresosTodos() {
      const datos = { fecha_inicio: "", fecha_fin: "" };
      axios.post("https://cemvid.ibingcode.com/public/listarTodosIngresos2", datos)
        .then(res => {
          this.vehiculo = Array.isArray(res.data) ? res.data : [];
          if (this.vehiculo.length > 0) {
            this.components_1 = true;
            this.components_2 = false;
          } else {
            this.components_1 = false;
            Swal.fire({ title: "Info", text: "No se encontraron ingresos", icon: "info", timer: 2000 });
          }
        })
        .catch(err => {
          console.error("Error listarTodosIngresos:", err);
          Swal.fire({ title: "Error", text: "Error al obtener ingresos", icon: "error" });
          this.vehiculo = [];
          this.components_1 = false;
        });
    },

    ListaDesintegracion() {

      this.sinResultados = false;
      if (this.opcion == 1) {
        this.latitud = "";
        this.longitud = "";
        this.numero_documento = "";
        this.siniestro = "";
        this.propietario = "";
        this.nombre_funcionario = "";
        this.numero_chasis = "";
        this.numero_motor = "";
        this.tipo_vehiculo = "";
        this.siniestro = "";
        this.propietario = "";
        this.marca = "";
        this.modelo = "";
        this.color = "";

        console.log(this.opcion);

        let datos = {
          placa: this.placa,
        };

        axios
          .post("https://cemvid.ibingcode.com/public/consultarplacas", datos)
          .then((result) => {
                    const data = Array.isArray(result.data) ? result.data : [];

        if (!data.length) {
          // no hay registros
          this.vehiculo = [];
          this.mostrarMultimedia = false;
          this.sinResultados = true;
          return;
        }




            console.log((this.vehiculo = result.data));
            console.log(this.cod_resolucion = result.data[0].resolucion);
            console.log(this.desc_resolucion = result.data[0].nombre_resolucion);
            this.latitud = result.data[0].latitud;
            this.longitud = result.data[0].longitud;
            this.numero_documento = result.data[0].numero_documento;
            this.nombre_funcionario = result.data[0].nombre_funcionario;
            this.numero_chasis = result.data[0].numero_chasis;
            this.siniestro = result.data[0].siniestro;
            this.propietario = result.data[0].propietario;
            this.numero_motor = result.data[0].numero_motor;
            this.tipo_vehiculo = result.data[0].tipo_vehiculo;
            this.cod_resolucion = result.data[0].resolucion;
            this.desc_resolucion = result.data[0].nombre_resolucion;
            this.marca = result.data[0].marca;
            this.modelo = result.data[0].modelo;
            this.color = result.data[0].color;
            this.vin = result.data[0].vin;
            this.mostrarMultimedia = false
          });
          
      } else {
        console.log(this.opcion);

        console.log((this.fecha_inicio = this.date));
        console.log((this.fecha_fin = this.date1));

        let datos = {
          fecha_inicio: this.date,
          fecha_fin: this.date1,
        };

        axios
          .post("https://cemvid.ibingcode.com/public/listarIngresos", datos)
          .then((result) => {
            this.vehiculo = result.data == "" ? [] : result.data;
            console.log((this.vehiculo = result.data));
            this.latitud = result.data[0].latitud;
            this.longitud = result.data[0].longitud;
            this.mostrarMultimedia = false
          });
      }
    },
    DetalleDesintegracion (evt, row) {
      console.log(row.placa);
      console.log(row.id_ingreso);

      this.placa = row.placa;
      this.latitud = row.latitud;
      this.longitud = row.longitud;
      this.numero_documento = row.numero_documento;
      this.nombre_funcionario = row.nombre_funcionario;
      this.numero_chasis = row.numero_chasis;
      this.numero_motor = row.numero_motor;
      this.tipo_vehiculo = row.tipo_vehiculo;
      this.propietario = row.propietario;
      this.siniestro = row.siniestro;
      this.cod_resolucion = row.cod_resolucion;
      this.desc_resolucion = row.desc_resolucion;
      this.marca = row.marca;
      this.modelo = row.modelo;
      this.color = row.color;
      this.vin = row.vin;
      

      this.components = false;
      this.components_1 = false;
      this.components_2 = true;
      this.paso = 1;            // 👈 SIEMPRE ARRANCAMOS EN PASO 1

      let datos = {
        codigo_ingreso: row.id_ingreso,
      };

      axios
        .post("https://cemvid.ibingcode.com/public/getsoportes", datos)
        .then((result) => {
          console.log((this.rutas = result.data));
        });
    },
    CargarDocumentos() {
      
      if(this.opcion == 646 ||this.v_poder == false ){

        if (
        this.files_0 == "" ||
        this.files_1 == "" ||
        this.files_2 == "" ||
        this.files_3 == "" ||
        this.files_4 == "" ||
        this.files_5 == ""
      ) {
        this.toolbar = false;

        Swal.fire({
          title: "ERROR",
          text: "No Ha Cargado Todos Los Soportes",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Cargando...",
          html: "Por Favor Espere...",
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: false,
          willOpen: () => {
            this.toolbar = false;
            Swal.showLoading();
          },
        });

        let formData = new FormData();
        formData.append("files_0", this.files_0);
        formData.append("files_1", this.files_1);
        formData.append("files_2", this.files_2);
        formData.append("files_3", this.files_3);
        formData.append("files_4", this.files_4);
        formData.append("files_5", this.files_5);
        formData.append("id_desintegradora", this.desintegradora);
        formData.append("id_ingreso", this.numero_registro);
        formData.append("placa", this.placa);
        const datospermitidos = { "Content-Type": "multipart/form-data" };

        axios
          .post(
            "https://cemvid.ibingcode.com/public/cargar_documentos",
            formData,
            datospermitidos
          )
          .then((respuesta) => {
            var msg = respuesta.data;

            console.log(msg);
            if (msg == 1) {
              Swal.fire({
                title: "EXITO",
                text: "Soportes Cargados Correctamente",
                allowOutsideClick: false,
                showConfirmButton: true,
                icon: "success",
              });

              this.components_3 = false;
              this.components_4 = true;
              this.components_5 = true;
              this.components_6 = true;
            } else {
              Swal.fire({
                title: "FALLO",
                text: "Error Al Cargar Soportes",
                icon: "error",
              });
            }
          });
        Swal.close();
      }

      }else if(this.opcion == 2 ||this.opcion == 3 ||this.opcion == 6 ||this.opcion == 7 ||this.opcion == 10){

              if (
              this.files_0 == "" ||
              this.files_1 == "" ||
              this.files_2 == "" ||
              this.files_3 == "" ||
              this.files_4 == ""
            ) {
              this.toolbar = false;

              Swal.fire({
                title: "ERROR",
                text: "No Ha Cargado Todos Los Soportes",
                icon: "error",
              });
            } else {
              Swal.fire({
                title: "Cargando...",
                html: "Por Favor Espere...",
                allowEscapeKey: false,
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                  this.toolbar = false;
                  Swal.showLoading();
                },
              });

              let formData = new FormData();
              formData.append("files_0", this.files_0);
              formData.append("files_1", this.files_1);
              formData.append("files_2", this.files_2);
              formData.append("files_3", this.files_3);
              formData.append("files_4", this.files_4);
              formData.append("id_desintegradora", this.desintegradora);
              formData.append("id_ingreso", this.numero_registro);
              formData.append("placa", this.placa);
              const datospermitidos = { "Content-Type": "multipart/form-data" };

              axios
                .post(
                  "https://cemvid.ibingcode.com/public/cargar_documentos",
                  formData,
                  datospermitidos
                )
                .then((respuesta) => {
                  var msg = respuesta.data;

                  console.log(msg);
                  if (msg == 1) {
                    Swal.fire({
                      title: "EXITO",
                      text: "Soportes Cargados Correctamente",
                      allowOutsideClick: false,
                      showConfirmButton: true,
                      icon: "success",
                    });

                    this.components_3 = false;
                    this.components_4 = true;
                    this.components_5 = true;
                    this.components_6 = true;
                  } else {
                    Swal.fire({
                      title: "FALLO",
                      text: "Error Al Cargar Soportes",
                      icon: "error",
                    });
                  }
                });
              Swal.close();
            }

        

      }else if(this.opcion == 4 ||this.opcion == 8 ||this.opcion == 11){

        if (
        this.files_0 == "" ||
        this.files_1 == "" ||
        this.files_2 == "" ||
        this.files_3 == ""
      ) {
        this.toolbar = false;

        Swal.fire({
          title: "ERROR",
          text: "No Ha Cargado Todos Los Soportes",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Cargando...",
          html: "Por Favor Espere...",
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: false,
          willOpen: () => {
            this.toolbar = false;
            Swal.showLoading();
          },
        });

        let formData = new FormData();
        formData.append("files_0", this.files_0);
        formData.append("files_1", this.files_1);
        formData.append("files_2", this.files_2);
        formData.append("files_3", this.files_3);
        formData.append("id_desintegradora", this.desintegradora);
        formData.append("id_ingreso", this.numero_registro);
        formData.append("placa", this.placa);
        const datospermitidos = { "Content-Type": "multipart/form-data" };

        axios
          .post(
            "https://cemvid.ibingcode.com/public/cargar_documentos",
            formData,
            datospermitidos
          )
          .then((respuesta) => {
            var msg = respuesta.data;

            console.log(msg);
            if (msg == 1) {
              Swal.fire({
                title: "EXITO",
                text: "Soportes Cargados Correctamente",
                allowOutsideClick: false,
                showConfirmButton: true,
                icon: "success",
              });

              this.components_3 = false;
              this.components_4 = true;
              this.components_5 = true;
              this.components_6 = true;
            } else {
              Swal.fire({
                title: "FALLO",
                text: "Error Al Cargar Soportes",
                icon: "error",
              });
            }
          });
        Swal.close();
      }

      }else if(this.opcion == 9){

        if (
        this.files_0 == "" 
      ) {
        this.toolbar = false;

        Swal.fire({
          title: "ERROR",
          text: "No Ha Cargado Todos Los Soportes",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Cargando...",
          html: "Por Favor Espere...",
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: false,
          willOpen: () => {
            this.toolbar = false;
            Swal.showLoading();
          },
        });

        let formData = new FormData();
        formData.append("files_0", this.files_0);
        formData.append("id_desintegradora", this.desintegradora);
        formData.append("id_ingreso", this.numero_registro);
        formData.append("placa", this.placa);
        const datospermitidos = { "Content-Type": "multipart/form-data" };

        axios
          .post(
            "https://cemvid.ibingcode.com/public/cargar_documentos",
            formData,
            datospermitidos
          )
          .then((respuesta) => {
            var msg = respuesta.data;

            console.log(msg);
            if (msg == 1) {
              Swal.fire({
                title: "EXITO",
                text: "Soportes Cargados Correctamente",
                allowOutsideClick: false,
                showConfirmButton: true,
                icon: "success",
              });

              this.components_3 = false;
              this.components_4 = true;
              this.components_5 = true;
              this.components_6 = true;
            } else {
              Swal.fire({
                title: "FALLO",
                text: "Error Al Cargar Soportes",
                icon: "error",
              });
            }
          });
        Swal.close();
      }

           

      }
      /*if (
        this.files_0 == "" ||
        this.files_1 == "" ||
        this.files_2 == "" ||
        this.files_3 == ""
      ) {
        this.toolbar = false;

        Swal.fire({
          title: "ERROR",
          text: "No Ha Cargado Todos Los Soportes",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Cargando...",
          html: "Por Favor Espere...",
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: false,
          willOpen: () => {
            this.toolbar = false;
            Swal.showLoading();
          },
        });

        let formData = new FormData();
        formData.append("files_0", this.files_0);
        formData.append("files_1", this.files_1);
        formData.append("files_2", this.files_2);
        formData.append("files_3", this.files_3);
        formData.append("id_desintegradora", this.desintegradora);
        formData.append("id_ingreso", this.numero_registro);
        formData.append("placa", this.placa);
        const datospermitidos = { "Content-Type": "multipart/form-data" };

        axios
          .post(
            "https://cemvid.ibingcode.com/public/cargar_documentos",
            formData,
            datospermitidos
          )
          .then((respuesta) => {
            var msg = respuesta.data;

            console.log(msg);
            if (msg == 1) {
              Swal.fire({
                title: "EXITO",
                text: "Soportes Cargados Correctamente",
                allowOutsideClick: false,
                showConfirmButton: true,
                icon: "success",
              });

              this.components_3 = false;
              this.components_4 = true;
              this.components_5 = true;
              this.components_6 = true;
            } else {
              Swal.fire({
                title: "FALLO",
                text: "Error Al Cargar Soportes",
                icon: "error",
              });
            }
          });
        Swal.close();
      }*/
    },
    aprobaregistro() {
      Swal.fire({
        title: "Esta seguro?",
        text: "Verificar los soportes, antes de aprobar la desintegracion del vehiculo !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "EXITO",
            text: "Solicitud Desintegracion Aprobada",
            allowOutsideClick: false,
            showConfirmButton: true,
            icon: "success",
          });

          let datos = {
            placa: this.placa,
            numero_registro: this.numero_registro,
            estado: 2,
          };
          axios
            .post(
              "https://cemvid.ibingcode.com/public/actualizar_estado",
              datos
            )
            .then((result) => {
              var respuesta = result.data;
              console.log(respuesta);
              if (respuesta == 1) {
                this.components_3 = true;
                this.components_4 = false;
                this.components_5 = false;
                this.components_6 = true;
              } else {
                Swal.fire({
                  title: "FALLO",
                  text: "Error En Solicitud, Informar al Administrador",
                  icon: "error",
                });
              }
            });
        }
      });
    },
    rechazaregistro() {
      let datos = {
        placa: this.placa,
        numero_registro: this.numero_registro,
        estado: 3,
      };
      axios
        .post("https://cemvid.ibingcode.com/public/actualizar_estado", datos)
        .then((result) => {
          var msg = result.data;

          if (msg == 1) {
            Swal.fire({
              title: "ALERTA",
              text: "Solicitud Desintegracion Rechazada",
              allowOutsideClick: false,
              showConfirmButton: true,
              icon: "success",
            });

            this.components_3 = true;
            this.components_4 = false;
            this.components_5 = false;
            this.components_6 = true;
          } else {
            Swal.fire({
              title: "FALLO",
              text: "Error En Solicitud, Informar al Administrador",
              icon: "error",
            });
          }
        });
    },
    fonctionTest() {
      if (this.value == true) {
        this.components_7 = true;
        this.components_8 = false;
        this.opcion = 1;
        this.vehiculo = [];
      } else {
        this.components_8 = true;
        this.components_7 = false;
        this.opcion = 2;
        this.vehiculo = [];
      }
    },
    f_cargar_poder() {
      if (this.v_poder == true) {
        this.components_12 = true;       
        this.opcion = 1;
        
      } else {
        this.components_12 = false;      
        this.opcion = 2;        
      }
    },
     f_cargar_siniestro() {
      if (this.v_siniestro == true) {
        this.components_13 = true;       
        this.opcion = 1;
        
      } else {
        this.components_13 = false;      
        this.opcion = 2;        
      }
    },

    f_guardar() {
      console.log(this.tipo_vehiculo);
      console.log(this.modelo);
      console.log(this.marca);
      console.log(this.color);
      console.log(this.placa);
      let datos = {
        tipo_vehiculo: this.tipo_vehiculo,
        modelo: this.modelo,
        marca: this.marca,
        color: this.color,
        placa: this.placa,
      };
      axios
        .post(
          "https://cemvid.ibingcode.com/public/actualizar_ingresos_modulo_3_web",
          datos
        )
        .then((result) => {
          var msg = JSON.parse(result.data);

          console.log(msg.CODIGO);
          if (msg.CODIGO == 0) {
            Swal.fire({
              title: "EXITO",
              text: "Registros Actualizados Correctamente",
              allowOutsideClick: false,
              showConfirmButton: true,
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "FALLO",
              text: "Error Al Actualizar Registro",
              icon: "error",
            });
          }
        });
      Swal.close();
    },
    f_guardar_siniestro() {
      console.log(this.siniestro);
      let datos = {
        siniestro: this.siniestro,
      };
      axios
        .post("https://cemvid.ibingcode.com/public/guardar_siniestro", datos)
        .then((result) => {
          var msg = JSON.parse(result.data);

          console.log(msg.CODIGO);
          if (msg.CODIGO == 0) {
            Swal.fire({
              title: "EXITO",
              text: "Registro Guardado Correctamente",
              allowOutsideClick: false,
              showConfirmButton: true,
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "FALLO",
              text: "Error Al Guardar Registro",
              icon: "error",
            });
          }
        });
      Swal.close();
    },
    f_descarga_soporte() {
      this.codigo_busqueda = 1;

      window.open(
        "https://cemvid.ibingcode.com/descarga_soporte.php?id_desintegradora=" +
          this.desintegradora +
          "&codigo_busqueda=" +
          this.codigo_busqueda,
        "_blank"
      );
    },
    f_mensaje_test() {
      Swal.fire("Funcionalidad en Desarrollo!");
    },
    f_generardocumento2() {
      let datos = {
        placa: this.placa,
        id_desintegradora: this.desintegradora,
        id_ingreso: this.numero_registro,
      };

      console.log(datos);
      axios
        .post("https://cemvid.ibingcode.com/public/generardocumento", datos)
        .then((respuesta) => {
          var msg = JSON.parse(respuesta.data);
          this.title1 = "Actas De Desintegracion";
          if (msg.CODIGO == 0) {
            Swal.fire({
              title: this.title1 + ", las rutas de descargas ya estan creadas",
              text: msg.MENSAJE,
              timer: 3000,
              icon: "info",
            });
          } else {
            Swal.fire({
              title:
                this.title1 + " y rutas de descargas generadas correctamente",
              text: msg.MENSAJE,
              timer: 3000,
              icon: "succes",
            });
          }
        });
    },
  },
};
</script>
<style scoped>
.my-custom-toggle {
  border: 1px solid #027be3;
}
.hero {
  background: url("../assets/Cemdiv_logo_2.jpg");
  background-repeat: no-repeat;
  height: 23vh;
}
</style>
