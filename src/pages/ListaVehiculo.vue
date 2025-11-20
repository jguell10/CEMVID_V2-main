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
          <q-item-label class="text-h6"> GESTION DESINTEGRACION </q-item-label>
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
      </q-card-section>
    </q-card>
    <q-card style="width: 100%" v-show="components_1">
      <div class="q-pa-md">
        <q-table
          :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
          :rows="vehiculo"
          :columns="headers_vehiculo"
          row-key="name"
          @row-click="DetalleDesintegracion"
        ></q-table>
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
                <q-field
                  standout="bg-purple-3 text-white"
                  label="Numero de documento"
                  stack-label
                >
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{ this.numero_documento }}
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section>
                <q-field
                  standout="bg-purple-3 text-white"
                  label="Usuario"
                  stack-label
                >
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{ this.nombre_funcionario.toUpperCase() }}
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
                <q-field
                  standout="bg-purple-3 text-white"
                  label="Numero de motor"
                  stack-label
                >
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0">
                      {{ this.numero_motor }}
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
                      {{ this.numero_chasis }}
                    </div>
                  </template>
                </q-field>
              </q-card-section>

              <q-card-section>
                <q-input
                  standout="bg-purple-3 text-white"
                  label="Siniestro"
                  stack-label
                  v-model="siniestro"
                />
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
          <!-- <q-video  
          :ratio="16/9"
           src="https://www.youtube.com/embed/2zd8RrvjksY?si=WXcUyHi6u6_wn9gc"      
            ></q-video> -->

          <div
            v-for="(ruta, index) in rutas"
            v-bind:key="ruta.ruta"
            class="col-4"
          >
            <div v-if="index <= 2">
              <q-img
                :src="'https://soportescemvid.ibingcode.com/' + ruta.ruta"
                :ratio="16 / 9"
                style="border: 3px solid purple; border-radius: 10px"
              ></q-img>

              <q-item-label
                v-if="index == 0"
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
                v-if="index == 1"
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
                v-if="index == 2"
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
            <div v-if="index == 3">
              <q-video
                :src="'https://soportescemvid.ibingcode.com/' + ruta.ruta"
                :ratio="16 / 9"
                style="border: 3px solid purple; border-radius: 10px"
              ></q-video>

              <q-item-label
                v-if="index == 3"
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

                              <!-- <div class="row">
                              <div class="col"> -->
      <q-card-section>
        <div class="row">
          <div class="col">
            <q-btn>
              <img
                src="../assets/load_nube.png"
                @click="toolbar = true;opcion=this.cod_resolucion"
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
          <!-- <div class="col">


          <q-btn  style="margin-left: 10px;" color="purple" glossy   @click="components_2=false;components_9=true;">MODULO 3</q-btn>



            <q-btn  style="margin-left: 10px;" color="purple" glossy   @click="components_2=false;components_10=true;components_11=false">MODULO 4</q-btn> 

    

            <q-btn  style="margin-left: 10px;" color="purple" glossy   @click="components_2=false;components_10=false;components_11=true">MODULO 5</q-btn>

           </div> -->

          <div class="col-2">
            <q-btn
              style="background-color: #e241e2"
              icon-right="save"
              label="Guardar"
              @click="f_guardar_siniestro()"
            />
          </div>
        </div>
      </q-card-section>
       <!-- </div>
       </div> -->
    </q-card>

    <q-dialog v-model="toolbar">
      <q-card style="width: 800px; max-width: 85vw">
        <q-toolbar>
          <q-avatar>
            <img src="../assets/documentos.png" />
          </q-avatar>
          <q-toolbar-title
            ><span class="text-weight-bold">CEMDIV</span>
            SOPORTES <br><span class="text-weight-thin">RESOLUCION {{opcion}}</span>
            </q-toolbar-title
          >
          
          

          
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <!-- <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section> -->
        <div class="q-pa-md" style="max-width: 600px">
          <!-- <q-file filled bottom-slots v-model="files_0" label="CERTIFICADO DE REVISION TECNICA SIJIN" counter>
        <template v-slot:prepend>
          <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop.prevent="files_0 = null" class="cursor-pointer"></q-icon>
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-file>-->
    <!--RESOLUCION 7036 APODERADO|SINIESTRO-->
      <div v-if="opcion==7036">
          <q-file
            filled
            bottom-slots
            v-model="files_0"
            label="CERTIFICADO DE TRADICION"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_0 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint> </template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_1"
            label="LICENCIA DE TRANSITO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_1 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint>  </template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_2"
            label="PODER AUTENTICADO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_2 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-card-section>     
          <q-file filled bottom-slots v-model="files_3" label="DIJIN" counter>
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_3 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint> </template>
          </q-file>

          
          <q-input dense filled v-model="date" mask="date" :rules="['date']" hint="Fecha expedicion DIJIN">
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
        </q-card-section>
          <q-file
            filled
            bottom-slots
            v-model="files_4"
            label="SINIESTRO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_4 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>          
          <q-file
            filled
            bottom-slots
            v-model="files_5"
            label="CEDULA APODERADO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_5 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint>  </template>
          </q-file>
        </div>
<!--RESOLUCION 7036 APODERADO-->
        <div v-if="opcion==2">
          <q-file
            filled
            bottom-slots
            v-model="files_0"
            label="CERTIFICADO DE TRADICION"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_0 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_1"
            label="LICENCIA DE TRANSITO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_1 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_2"
            label="PODER AUTENTICADO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_2 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-card-section> 
          <q-file filled bottom-slots v-model="files_3" label="DIJIN" counter>
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_3 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-input dense filled v-model="date" mask="date" :rules="['date']" hint="Fecha expedicion DIJIN">
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
        </q-card-section>     
          <q-file
            filled
            bottom-slots
            v-model="files_4"
            label="CEDULA APODERADO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_4 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
        </div>

        <!--RESOLUCION 7036 PROPIETARIO|SINIESTRO-->
        <div v-if="opcion==3">
          <q-file
            filled
            bottom-slots
            v-model="files_0"
            label="CERTIFICADO DE TRADICION"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_0 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_1"
            label="LICENCIA DE TRANSITO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_1 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>  
          <q-card-section>         
          <q-file filled bottom-slots v-model="files_2" label="DIJIN" counter>
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_2 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-input dense filled v-model="date" mask="date" :rules="['date']" hint="Fecha expedicion DIJIN">
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
        </q-card-section>
          <q-file
            filled
            bottom-slots
            v-model="files_3"
            label="SINIESTRO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_3 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_4"
            label="CEDULA PROPIETARIO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_4 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>          
        </div>
         <!--RESOLUCION 7036 PROPIETARIO-->
         <div v-if="opcion==4">
          <q-file
            filled
            bottom-slots
            v-model="files_0"
            label="CERTIFICADO DE TRADICION"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_0 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_1"
            label="LICENCIA DE TRANSITO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_1 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-card-section>           
          <q-file filled bottom-slots v-model="files_2" label="DIJIN" counter>
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_2 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-input dense filled v-model="date" mask="date" :rules="['date']" hint="Fecha expedicion DIJIN">
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
        </q-card-section>          
          <q-file
            filled
            bottom-slots
            v-model="files_3"
            label="CEDULA PROPIETARIO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_3 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>          
        </div>
        <!--RESOLUCION 646 APODERADO|SINIESTRO-->
      <div v-if="opcion=646">
          <q-file
            filled
            bottom-slots
            v-model="files_0"
            label="CERTIFICADO SIJIN"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_0 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_1"
            label="CERTIFICADO DE TRADICION"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_0 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_2"
            label="LICENCIA DE TRANSITO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_2 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          
          <q-card-section :class="$q.dark.isActive ? 'text-white' : 'text-black'">
        
        <q-toggle
          v-model="v_poder"
          color="purple "
          text-color="black"
          icon="check"
          label="APODERDO"
          @click="f_cargar_poder()"
        ></q-toggle>
      </q-card-section>
          <q-file
            filled
            bottom-slots
            v-model="files_3"
            label="PODER AUTENTICADO"
            counter
            v-show="components_12"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_3 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-card-section> 
          <q-file filled bottom-slots v-model="files_4" label="DIJIN" counter>
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_4 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-input dense filled v-model="date" mask="date" :rules="['date']" hint="Fecha expedicion DIJIN">
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
        </q-card-section>

         <q-card-section :class="$q.dark.isActive ? 'text-white' : 'text-black'">
         
        <q-toggle
          v-model="v_siniestro"
          color="purple "
          text-color="black"
          icon="check"
          label="CARGAR SINIESTRO"
          @click="f_cargar_siniestro()"
        ></q-toggle>
      </q-card-section>
          <q-file
            filled
            bottom-slots
            v-model="files_5"
            label="SINIESTRO"
            counter
            v-show="components_13"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_5 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>          
          <q-file
            filled
            bottom-slots
            v-model="files_6"
            label="CEDULA"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_6 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
        </div>
<!--RESOLUCION 646 APODERADO-->
        <div v-if="opcion==6">
          <q-file
            filled
            bottom-slots
            v-model="files_0"
            label="CERTIFICADO DE TRADICION"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_0 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_1"
            label="LICENCIA DE TRANSITO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_1 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_2"
            label="PODER AUTENTICADO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_2 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-card-section> 
          <q-file filled bottom-slots v-model="files_3" label="DIJIN" counter>
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_3 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file> 
          <q-input dense filled v-model="date" mask="date" :rules="['date']" hint="Fecha expedicion DIJIN">
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
        </q-card-section>    
          <q-file
            filled
            bottom-slots
            v-model="files_4"
            label="CEDULA APODERADO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_4 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
        </div>

        <!--RESOLUCION 646 PROPIETARIO|SINIESTRO-->
        <div v-if="opcion==7">
          <q-file
            filled
            bottom-slots
            v-model="files_0"
            label="CERTIFICADO DE TRADICION"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_0 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_1"
            label="LICENCIA DE TRANSITO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_1 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-card-section>           
          <q-file filled bottom-slots v-model="files_2" label="DIJIN" counter>
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_2 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-input dense filled v-model="date" mask="date" :rules="['date']" hint="Fecha expedicion DIJIN">
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
        </q-card-section>
          <q-file
            filled
            bottom-slots
            v-model="files_3"
            label="SINIESTRO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_3 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_4"
            label="CEDULA PROPIETARIO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_4 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>          
        </div>
         <!--RESOLUCION 646 PROPIETARIO-->
         <div v-if="opcion==8">
          <q-file
            filled
            bottom-slots
            v-model="files_0"
            label="CERTIFICADO DE TRADICION"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_0 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_1"
            label="LICENCIA DE TRANSITO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_1 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-card-section>           
          <q-file filled bottom-slots v-model="files_2" label="DIJIN" counter>
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_2 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-input dense filled v-model="date" mask="date" :rules="['date']" hint="Fecha expedicion DIJIN">
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
        </q-card-section>          
          <q-file
            filled
            bottom-slots
            v-model="files_3"
            label="CEDULA PROPIETARIO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_3 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>          
        </div>
        <!--RESOLUCION 1730-->
        <div v-if="opcion==9">
          <q-file
            filled
            bottom-slots
            v-model="files_0"
            label="RESOLUCION DE DESINTEGRACION"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_0 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>
            <template v-slot:hint></template>
          </q-file>                   
        </div>
        <!--RESOLUCION LEY NORMALIZACION-->
        <div v-if="opcion==10">
          <q-file
            filled
            bottom-slots
            v-model="files_0"
            label="CERTIFICADO DE TRADICION"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_0 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_1"
            label="LICENCIA DE TRANSITO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_1 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_2"
            label="PODER AUTENTICADO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_2 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-card-section> 
          <q-file filled bottom-slots v-model="files_3" label="DIJIN" counter>
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_3 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-input dense filled v-model="date" mask="date" :rules="['date']" hint="Fecha expedicion DIJIN">
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
        </q-card-section>     
          <q-file
            filled
            bottom-slots
            v-model="files_4"
            label="CEDULA APODERADO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_4 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
        </div>
        <!--RESOLUCION LEY NORMALIZACION-->
        <div v-if="opcion==11">
          <q-file
            filled
            bottom-slots
            v-model="files_0"
            label="CERTIFICADO DE TRADICION"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_0 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-file
            filled
            bottom-slots
            v-model="files_1"
            label="LICENCIA DE TRANSITO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_1 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-card-section>           
          <q-file filled bottom-slots v-model="files_2" label="DIJIN" counter>
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_2 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>
          <q-input dense filled v-model="date" mask="date" :rules="['date']" hint="Fecha expedicion DIJIN">
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
          </q-card-section>          
          <q-file
            filled
            bottom-slots
            v-model="files_3"
            label="CEDULA PROPIETARIO"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="files_3 = null"
                class="cursor-pointer"
              ></q-icon>
            </template>

            <template v-slot:hint></template>
          </q-file>          
        </div>                             
      </div>
        <div class="q-pa-md q-gutter-sm text-white">
          <q-btn
            style="background-color: #e241e2"
            icon-right="send"
            label="Cargar Soportes"
            @click="CargarDocumentos()"
          />
        </div>
      </q-card>
    </q-dialog>

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
          <div class="col-4">
            <q-btn
              style="margin-left: 2px"
              color="purple"
              glossy
              @click="
                components_2 = true;
                components_9 = false;
              "
              >MODULO 2</q-btn
            >

            <q-btn
              style="margin-left: 2px"
              color="purple"
              glossy
              @click="
                components_9 = false;
                components_10 = true;
                components_11 = false;
              "
              >MODULO 4</q-btn
            >

            <q-btn
              style="margin-left: 2px"
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
          <div class="col-2">
            <q-btn
              style="background-color: #e241e2"
              icon-right="save"
              label="Guardar"
              @click="f_guardar()"
            />
          </div>
        </div>
      </q-card-section>
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
import axios from "axios";
import { ref } from "vue";
import Swal from "sweetalert2";
export default {
  name: "App",

  data() {
    return {
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
      headers_vehiculo: [
        {
          label: "#REGISTRO",
          field: "id_ingreso",
          name: "id_ingreso",
          align: "center",
        },
        { label: "PLACA", field: "placa", name: "placa", align: "center" },
        {
          label: "FECHA_INGRESO",
          field: "fecha_ingreso",
          name: "fecha_ingreso",
          align: "center",
        },
        {
          label: "LATITUD",
          field: "latitud",
          name: "latitud",
          align: "center",
        },
        {
          label: "LONGITUD",
          field: "longitud",
          name: "longitud",
          align: "center",
        },
      ],
      rutas: [],
      components: true,
      components_1: false,
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
      cod_resolucion:0,
      desc_resolucion: "",
    };
  },

  created() {
    this.username = localStorage.getItem("nombre");
    // this.username='yordis';
  },
  methods: {
    ListaDesintegracion() {
      if (this.opcion == 1) {
        this.latitud = "";
        this.longitud = "";
        this.numero_documento = "";
        this.nombre_funcionario = "";
        this.numero_chasis = "";
        this.numero_motor = "";
        this.tipo_vehiculo = "";
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
            console.log((this.vehiculo = result.data));
            console.log(this.cod_resolucion = result.data[0].resolucion);
            console.log(this.desc_resolucion = result.data[0].nombre_resolucion);
            this.latitud = result.data[0].latitud;
            this.longitud = result.data[0].longitud;
            this.numero_documento = result.data[0].numero_documento;
            this.nombre_funcionario = result.data[0].nombre_funcionario;
            this.numero_chasis = result.data[0].numero_chasis;
            this.numero_motor = result.data[0].numero_motor;
            this.tipo_vehiculo = result.data[0].tipo_vehiculo;
            this.cod_resolucion = result.data[0].resolucion;
            this.desc_resolucion = result.data[0].nombre_resolucion;
            this.marca = result.data[0].marca;
            this.modelo = result.data[0].modelo;
            this.color = result.data[0].color;
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
          });
      }
    },
    DetalleDesintegracion(evt, row) {
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
      this.cod_resolucion = row.cod_resolucion;
      this.desc_resolucion = row.desc_resolucion;
      this.marca = row.marca;
      this.modelo = row.modelo;
      this.color = row.color;

      this.components = false;
      this.components_1 = false;
      this.components_2 = true;

      let datos = {
        codigo_ingreso: row.id_ingreso,
      };

      axios
        .post("https://cemvid.ibingcode.com/public/getsoportes", datos)
        .then((result) => {
          console.log((this.rutas = result.data));
          console.log(result.data[0].ruta.split("/", 2));
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
    f_generardocumento() {
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
