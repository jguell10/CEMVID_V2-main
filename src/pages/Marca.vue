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

          
          <q-tab name="tab4" label="DESINTEGRADORA " @click="components_1=false;components_2=false;components_3=false;components_4=true;components_5=false;components_6=false;" />
          <q-tab name="tab5" label="PRECIOS" @click="components_1=false;components_2=false;components_3=false;components_4=false;components_5=true;components_6=false;" />
          <q-tab name="tab3" label="USUARIOS " @click="components_1=false;components_2=false;components_3=true;components_4=false;components_5=false;components_6=false;" />
          <q-tab name="tab6" label="CONTRATOS" @click="components_1=false;components_2=false;components_3=false;components_4=false;components_5=false;components_6=true;" />
                                        
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
                <q-input standout="bg-purple-3 text-white" label="rol" stack-label v-model="id_rol" />
              </q-card-section>
              <q-card-section>
                <q-select
                  standout="bg-purple-3 text-white"
                  label="Sede"
                  stack-label
                  v-model="idsede"
                  :options="sedes"
                  option-label="nombre_sede"   
                  option-value="idsede"       
                  emit-value
                  map-options
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
                <q-input standout="bg-purple-3 text-white" label="Nombre" stack-label v-model="nombre_desintegradora" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Razon Social" stack-label v-model="razon_social" />
              </q-card-section>              
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Dirección de notificación" stack-label v-model="direccion_desintegradora" />
              </q-card-section>
              
              <q-card-section>
                <q-select
                  standout="bg-purple-3 text-white"
                  label="Departamento"
                  stack-label
                  v-model="departamento"
                  :options="departamentosColombia"
                  emit-value
                  map-options
                  options-dense
                />
              </q-card-section>

              <q-card-section>
                <q-select
                  standout="bg-purple-3 text-white"
                  label="Ciudad"
                  stack-label
                  v-model="ciudad"
                  :options="ciudadesFiltradas"
                  emit-value
                  map-options
                  options-dense
                  :disable="!departamento"
                />
              </q-card-section>

              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Representante legal" stack-label v-model="contacto_desintegradora" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="NIT" stack-label v-model="nit" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="email" stack-label v-model="email_desintegradora" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="telefono" stack-label v-model="telefono_desintegradora" />
              </q-card-section>

              <q-card-section>
                <q-uploader
                  ref="uplLogo"                    
                  label="Logo"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                  field-name="logo"
                  :form-fields="[
                    { name: 'id_desintegradora', value: id_desintegradora }
                  ]"
                />
              </q-card-section> 

            </q-card>
          </div>
          
          <div class="col-4">
            <q-card-section>
                <q-btn target="_blank" glossy style="background-color:#f76ff7">{{ new Date().toLocaleString() }}</q-btn>
              </q-card-section>
            <q-card-section>
              <q-img src="../assets/Cemdiv_logo_2.jpg" style="width: 50%;height: auto; align-items: center;"></q-img>
            </q-card-section>
          </div>

          <div class="col-4">  
            <q-card>
              <!-- Se carga el documento de la camara de comercio -->
              <q-card-section>
                <q-uploader
                  ref="uplCamaraComercio"
                  label="Cámara de comercio"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                  field-name="camara_comercio"
                  :form-fields="[
                    { name: 'id_desintegradora', value: id_desintegradora }
                  ]"
                />
                <q-card-section>
                  <q-input
                    standout="bg-purple-3 text-white"
                    label="Última renovación Cámara de Comercio"
                    stack-label
                    v-model="fecha_camara_comercio"
                    type="date"
                  />
                </q-card-section>
              </q-card-section>
              
              <q-card-section>
                <div class="row q-col-gutter-md items-center">
                  <div class="col-12">
                    <q-item-label class="text-subtitle2">
                      Seleccione resoluciones:
                    </q-item-label>
                    <q-checkbox
                      v-model="tiene646"
                      label="646"
                      left-label
                      class="q-mr-md"
                    />
                    <q-checkbox
                      v-model="tiene7036"
                      label="7036"
                      left-label
                    />
                  </div>

                  <!-- Póliza 646 -->
                  <div class="col-12" v-if="tiene646">
                    <!-- Póliza 646 -->
                    <q-uploader
                      v-if="tiene646"
                      ref="uplPoliza646"
                      label="Póliza 646"
                      style="width: 100%;"
                      flat
                      bordered
                      color="purple"
                      text-color="white"
                      no-thumbnails
                      url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                      field-name="poliza_646"
                      :form-fields="[
                        { name: 'id_desintegradora', value: id_desintegradora }
                      ]"
                    />

                    <q-card-section>
                      <q-input
                        standout="bg-purple-3 text-white"
                        label="Fecha de vencimiento de póliza 646"
                        stack-label
                        v-model="fecha_vencimiento_poliza_646"
                        type="date"
                      />
                    </q-card-section>                    
                  </div>

                  <!-- Póliza 7036 -->
                  <div class="col-12" v-if="tiene7036">
                    <q-uploader
                      v-if="tiene7036"
                      ref="uplPoliza7036"
                      label="Póliza 7036"
                      style="width: 100%;"
                      flat
                      bordered
                      color="purple"
                      text-color="white"
                      no-thumbnails
                      url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                      field-name="poliza_7036"
                      :form-fields="[
                        { name: 'id_desintegradora', value: id_desintegradora }
                      ]"
                    />

                    <q-card-section>
                      <q-input
                        standout="bg-purple-3 text-white"
                        label="Fecha de vencimiento de póliza 7036"
                        stack-label
                        v-model="fecha_vencimiento_poliza_7036"
                        type="date"
                      />
                    </q-card-section>                    
                  </div>

                  <!-- RUT 646 (si hay 646 o 7036 o ambos) -->
                  
                </div>
              </q-card-section>


              <q-card-section>
                <q-uploader
                  ref="uplRut"
                  label="RUT"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                  field-name="rut_7036"
                  :form-fields="[
                    { name: 'id_desintegradora', value: id_desintegradora }
                  ]"
                />                
              </q-card-section>           
              <q-card-section>
                <q-uploader
                  ref="uplIso9001"
                  label="Certificación ISO 9001"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                  field-name="iso_9001"
                  :form-fields="[
                    { name: 'id_desintegradora', value: id_desintegradora }
                  ]"
                />

                <q-card-section>
                  <q-input
                    standout="bg-purple-3 text-white"
                    label="Fecha de vencimiento de ISO 9001"
                    stack-label
                    v-model="fecha_vencimiento_iso"
                    type="date"
                  />
                </q-card-section>
              </q-card-section>


              <q-checkbox
                v-model="tieneISO"
                label="SARLAF?"
              />

              <q-card-section>

              <q-uploader
                v-if="tieneISO"
                ref="uplSarlaf"
                label="SARLAF"
                style="width: 100%;"
                flat
                bordered
                color="purple"
                text-color="white"
                no-thumbnails
                url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                field-name="sarlaf"
                :form-fields="[
                  { name: 'id_desintegradora', value: id_desintegradora }
                ]"
              />
              </q-card-section>
              
              <q-card-section>
                <q-uploader
                  ref="uplPoliticaDatos"
                label="Política de tratamiento de datos"
                style="width: 100%;"
                flat
                bordered
                color="purple"
                text-color="white"
                no-thumbnails
                url="https://cemvid.ibingcode.com/public/subir_documentos_desintegradora"
                field-name="politica_datos"
                :form-fields="[
                  { name: 'id_desintegradora', value: id_desintegradora }
                ]"
              />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <q-card-section>
        <div class="row">
          <div class="col-2">
            <q-btn style="background-color:#e241e2;" icon-right="save" label="Guardar" @click="f_guardar_desintegradora()" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card style="width: 100%;" v-show="components_5">
      <q-item clickable v-ripple class="rounded-borders" :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'">
        <q-item-section>
          <q-item-label class="text-h6">PRECIO</q-item-label>
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
                <q-input standout="bg-purple-3 text-white" label="Nombre" stack-label v-model="nombre_sede" />
              </q-card-section>

              <q-card-section>
                <q-select
                  standout="bg-purple-3 text-white"
                  label="Desintegradora"
                  stack-label
                  v-model="id_desintegradora_sede"
                  :options="desintegradoras"
                  option-label="nombre_desintegradora"
                  option-value="id_desintegradora"
                  emit-value
                  map-options
                />
              </q-card-section>

              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Dirección" stack-label v-model="direccion_sede" />
              </q-card-section>

              <q-card-section>
                <q-select
                  standout="bg-purple-3 text-white"
                  label="Departamento"
                  stack-label
                  v-model="departamento"
                  :options="departamentosColombia"
                  emit-value
                  map-options
                  options-dense
                />
              </q-card-section>

              <q-card-section>
                <q-select
                  standout="bg-purple-3 text-white"
                  label="Ciudad"
                  stack-label
                  v-model="ciudad"
                  :options="ciudadesFiltradas"
                  emit-value
                  map-options
                  options-dense
                  :disable="!departamento"
                />
              </q-card-section>


              <div class="q-pa-md">
                <q-input
                  standout="bg-purple-3 text-white"
                  label="Ubicación"
                  stack-label v-model="ubicacion"                  
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
              </div>



              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Responsable" stack-label v-model="contacto_sede" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="email" stack-label v-model="email_sede" />
              </q-card-section>
              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Telefono" stack-label v-model="telefono_sede" />
              </q-card-section>

              

              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Radio en Metros" stack-label v-model="radio_metros" />
              </q-card-section>


              <q-card-section>
                <div class="row q-col-gutter-md items-center">
                  <div class="col-12">
                    <q-item-label class="text-subtitle2">
                      Seleccione resoluciones:
                    </q-item-label>
                    <q-checkbox
                      v-model="tiene646"
                      label="646"
                      left-label
                      class="q-mr-md"
                    />
                    <q-checkbox
                      v-model="tiene7036"
                      label="7036"
                      left-label
                    />
                  </div>

                  <!-- Póliza 646 -->
                  <div class="col-12" v-if="tiene646">
                    <q-uploader
                      ref="uplPoliza646"
                      label="Póliza 646"
                      style="width: 100%;"
                      flat
                      bordered
                      color="purple"
                      text-color="white"
                      no-thumbnails
                      auto-upload="false"
                      hide-upload-btn
                       url="https://cemvid.ibingcode.com/public/subir_documentos_sede_desintegradora"
                      field-name="poliza_646"
                      :form-fields="[
                      { name: 'id_desintegradora', value: id_desintegradora_sede },
                      { name: 'id_sede', value: id_sede }
                      ]"
                    />

                    <q-card-section>
                      <q-input
                        standout="bg-purple-3 text-white"
                        label="Fecha de vencimiento de poliza 646" 
                        stack-label
                        v-model="fecha_vencimiento_poliza_646"
                        type="date"
                      />
                    </q-card-section>                  

                    
                  </div>

                  <!-- Póliza 7036 -->
                  <div class="col-12" v-if="tiene7036">
                    <q-uploader
                      ref="uplPoliza7036"
                      label="Póliza 7036"
                      style="width: 100%;"
                      flat
                      bordered
                      color="purple"
                      text-color="white"
                      no-thumbnails
                      auto-upload="false"
                      hide-upload-btn
                      url="https://cemvid.ibingcode.com/public/subir_documentos_sede_desintegradora"
                      field-name="poliza_7036"
                      :form-fields="[
                      { name: 'id_desintegradora', value: id_desintegradora_sede},
                      { name: 'id_sede', value: id_sede}
                      ]"
                    />

                    <q-card-section>
                      <q-input
                        standout="bg-purple-3 text-white"
                        label="Fecha de vencimiento de poliza 7036"
                        stack-label
                        v-model="fecha_vencimiento_poliza_7036"
                        type="date"
                      />
                    </q-card-section>

                    
                  </div>

                  <!-- RUT 646 (si hay 646 o 7036 o ambos) -->
                  
                </div>
              </q-card-section>

              <q-card-section>
                <q-uploader
                  ref="uplResolucionAmbiental"
                  label="Resolucion Ambiental"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  auto-upload="false"
                  hide-upload-btn
                  url="https://cemvid.ibingcode.com/public/subir_documentos_sede_desintegradora"
                  field-name="resolucion_ambiental"
                  :form-fields="[
                  { name: 'id_desintegradora', value: id_desintegradora_sede},
                  { name: 'id_sede', value: id_sede}
                  ]"
                />
              </q-card-section>

              <q-card-section>
                <q-uploader
                  ref="uplBomberos"
                  label="Bomberos"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  auto-upload="false"
                  hide-upload-btn
                  url="https://cemvid.ibingcode.com/public/subir_documentos_sede_desintegradora"
                  field-name="bomberos"
                  :form-fields="[
                  { name: 'id_desintegradora', value: id_desintegradora_sede},
                  { name: 'id_sede', value: id_sede }                  
                  
                  ]"
                />

                <q-input
                        standout="bg-purple-3 text-white"
                        label="Fecha de vencimiento de poliza"
                        stack-label
                        v-model="fecha_vencimiento_poliza"
                        type="date"
                      />


              </q-card-section>

              <q-card-section>
                <q-uploader
                  ref="uplSalud"
                  label="Certificado de Salud"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  auto-upload="false"
                  hide-upload-btn
                  url="https://cemvid.ibingcode.com/public/subir_documentos_sede_desintegradora"
                  field-name="certificado_salud"
                  :form-fields="[
                  { name: 'id_desintegradora', value: id_desintegradora_sede},
                  {  name: 'id_sede', value: id_sede  }                  
                  
                  ]"
                />

                <q-input
                        standout="bg-purple-3 text-white"
                        label="Fecha de vencimiento certificado de salud"
                        stack-label
                        v-model="fecha_vencimiento_salud"
                        type="date"
                      />


              </q-card-section>

              <q-card-section>
                <q-uploader
                  ref="uplUsoSuelo"
                  label="Uso de suelo"
                  style="width: 100%;"
                  flat
                  bordered
                  color="purple"
                  text-color="white"
                  no-thumbnails
                  auto-upload="false"
                  hide-upload-btn
                  url="https://cemvid.ibingcode.com/public/subir_documentos_sede_desintegradora"
                  field-name="uso_suelo"
                  :form-fields="[
                  { name: 'id_desintegradora', value: id_desintegradora},
                  {  name: 'id_sede', value: id_sede}                    
                  
                  ]"
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
            <q-btn style="background-color:#e241e2;" icon-right="save" label="Guardar" @click="f_guardar_sede()" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card style="width: 100%;" v-show="components_6">
      <q-item clickable v-ripple class="rounded-borders" :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'">
        <q-item-section>
          <q-item-label class="text-h6">CONTRATOS</q-item-label>
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
                <q-input standout="bg-purple-3 text-white" label="Número de contrato" stack-label v-model="contacto_sede" />
              </q-card-section>

              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Entidad Contratante" stack-label v-model="contratante" />
              </q-card-section>

              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Fecha" stack-label v-model="fecha_contrato" />
              </q-card-section>

              <q-card-section>
                <q-input standout="bg-purple-3 text-white" label="Número de vehículos" stack-label v-model="n_vehiculos" />
              </q-card-section>

              <q-card-section>
                <q-select
                  standout="bg-purple-3 text-white"
                  label="Desintegradora"
                  stack-label
                  v-model="id_desintegradora_sede"
                  :options="desintegradoras"
                  option-label="nombre_desintegradora"
                  option-value="id_desintegradora"
                  emit-value
                  map-options
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
            <q-btn style="background-color:#e241e2;" icon-right="save" label="Guardar" @click="f_mensaje_test()" />
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

import { departamentosColombia, ciudadesPorDepartamento } from 'src/data/colombia-ubicacion'

export default {
  name: 'Marca',
  components: { LMap, LTileLayer, LMarker },

  data () {
    return {



      departamento: null,
      ciudad: null,
      departamentosColombia,
      ciudadesFiltradas: [],
      sedes:[],
      tieneISO: false,
      color:'',    


      //---- Variables de Sede

      desintegradoras: [],       
      id_desintegradora: null, 

      // ---- variables para el mapa ----
      abrirMapa: false,
      center: [10.96854, -74.78132],
      zoom: 13,
      marker: null,
      ubicacion: '',

      //---- Variables de desintegradora

      nombre_desintegradora: '',
      razon_social: '',
      direccion_desintegradora:'',
      contacto_desintegradora: '',
      email_desintegradora: '',
      nit:'',
      telefono_desintegradora:'',
      fecha_camara_comercio: '',
      fecha_vencimiento_poliza_646: '',
      fecha_vencimiento_poliza_7036: '',
      fecha_vencimiento_iso: '',      
      opcion_646: false,
      opcion_7036: false,
      tiene646: false,
      tiene7036: false,



      //---- Variables de sede

      nombre_sede: '',
      id_desintegradora_sede:'',
      id_sede:'',
      direccion_sede:'',
      contacto_sede: '',
      email_sede: '',
      telefono_sede:'',
      radio_metros: '',
      fecha_vencimiento_poliza: '',
      fecha_vencimiento_salud: '',


      //variables contrato
      contratante: '',
      fecha_contrato: '',
      n_vehiculos: '',

      

      // ---- variables de módulos ----
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
      idsede: '',

      vehiculo: [],
      headers_vehiculo: [
        { label: '#REGISTRO', field: 'id_ingreso', name: 'id_ingreso', align: 'center' },
        { label: 'PLACA', field: 'placa', name: 'placa', align: 'center' },
        { label: 'FECHA_INGRESO', field: 'fecha_ingreso', name: 'fecha_ingreso', align: 'center' },
        { label: 'LATITUD', field: 'latitud', name: 'latitud', align: 'center' },
        { label: 'LONGITUD', field: 'longitud', name: 'longitud', align: 'center' }
      ],
      rutas: [],
      components_1: false,
      components_2: false,
      components_3: false,
      components_4: false,
      components_5: false,
      components_6: false,
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
      nombre_color: '',
      marca:''
    }
  },

  created () {
    this.username = localStorage.getItem('nombre')
    this.cargarDesintegradoras() 
  },

  

  // 👇 Watch para redibujar el mapa cuando se abre el diálogo
  watch: {

    departamento (nuevo) {
      this.ciudad = null
        if (!nuevo) {
        this.ciudadesFiltradas = []
        return
        }

        const key = nuevo.charAt(0).toUpperCase() + nuevo.slice(1).toLowerCase()
        const lista = ciudadesPorDepartamento[key] || []

        this.ciudadesFiltradas = lista.map(nombre => ({
      label: nombre,
      value: nombre
      }))
        
    },

    

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

    cargarDesintegradoras () {
        axios
          .get('https://cemvid.ibingcode.com/public/listar_desintegradoras')
          .then(res => {
            console.log('respuesta desintegradoras (cruda):', res.data)

            // 1) Tomamos la primera fila del array
            const fila = Array.isArray(res.data) && res.data.length > 0 ? res.data[0] : null

            if (!fila || !fila.salida) {
              console.warn('No viene propiedad "salida" en la respuesta')
              this.desintegradoras = []
              return
            }

            // 2) Primera capa: parsear el JSON de "salida"
            let salida
            try {
              salida = JSON.parse(fila.salida)
              console.log('salida parseada:', salida) // { CODIGO: "0", DATOS: "..." }
            } catch (e) {
              console.error('Error parseando fila.salida:', e)
              this.desintegradoras = []
              return
            }

            // 3) Segunda capa: parsear el JSON de "DATOS"
            let lista
            try {
              lista = salida.DATOS ? JSON.parse(salida.DATOS) : []
              console.log('lista desintegradoras (parseada):', lista)
            } catch (e) {
              console.error('Error parseando salida.DATOS:', e)
              this.desintegradoras = []
              return
            }

            // 4) Asignamos al array que usa el QSelect
            this.desintegradoras = Array.isArray(lista) ? lista : []
            console.log('desintegradoras FINAL para el select:', this.desintegradoras)
          })
          .catch(err => {
            console.error(err)
            Swal.fire({
              title: 'ERROR',
              text: 'No se pudieron cargar las desintegradoras',
              icon: 'error'
            })
          })
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

    // f_guardar_desintegradora () {
    //   // 👉 usar los nombres correctos de data()


    //   console.log('this.nombre_desintegradora:', this.nombre_desintegradora)
    //   console.log('this.razon_social:', this.razon_social)
    //   console.log('this.direccion_desintegradora:', this.direccion_desintegradora)
    //   console.log('this.departamento:', this.departamento)
    //   console.log('this.ciudad:', this.ciudad)
    //   console.log('this.contacto_desintegradora:', this.contacto_desintegradora)
    //   console.log('this.email_desintegradora:', this.email_desintegradora)
    //   console.log('this.telefono_desintegradora:', this.telefono_desintegradora)

    //   const formData = new FormData()
    //   formData.append('nombre', this.nombre_desintegradora)
    //   formData.append('razon_social', this.razon_social)
    //   formData.append('direccion_desintegradora', this.direccion_desintegradora)
    //   formData.append('departamento', this.departamento)
    //   formData.append('ciudad', this.ciudad)
    //   formData.append('contacto_desintegradora', this.contacto_desintegradora)
    //   formData.append('email_desintegradora', this.email_desintegradora)
    //   formData.append('telefono_desintegradora', this.telefono_desintegradora)

    //   axios.post('https://cemvid.ibingcode.com/public/guardar_desintegradora', formData)
    //     .then(result => {
    //       // tu API devuelve algo tipo string JSON
    //       const msg = typeof result.data === 'string'
    //         ? JSON.parse(result.data)
    //         : result.data

    //       if (msg.CODIGO === 0 || msg.CODIGO === '0') {

    //         if (msg.ID_DESINTEGRADORA || msg.id_desintegradora) {
    //       this.id_desintegradora = msg.ID_DESINTEGRADORA || msg.id_desintegradora
    //         }

    //         Swal.fire({
    //           title: 'ÉXITO',
    //           text: 'Registros Guardados Correctamente',
    //           icon: 'success'
    //         })
    //       } else {
    //         Swal.fire({
    //           title: 'FALLO',
    //           text: msg.DATOS || 'Error al guardar registros',
    //           icon: 'error'
    //         })
    //       }
    //     })
    //     .catch(err => {
    //       console.error(err)
    //       Swal.fire({
    //         title: 'ERROR',
    //         text: 'Error al comunicarse con el servidor',
    //         icon: 'error'
    //       })
    //     })
    // }
    f_guardar_desintegradora () {
  console.log('this.nombre_desintegradora:', this.nombre_desintegradora)
  console.log('this.razon_social:', this.razon_social)
  console.log('this.direccion_desintegradora:', this.direccion_desintegradora)
  console.log('this.nit:', this.nit)
  console.log('this.departamento:', this.departamento)
  console.log('this.ciudad:', this.ciudad)
  console.log('this.contacto_desintegradora:', this.contacto_desintegradora)
  console.log('this.email_desintegradora:', this.email_desintegradora)
  console.log('this.telefono_desintegradora:', this.telefono_desintegradora)
  console.log('this.fecha_camara_comercio:', this.fecha_camara_comercio)
  console.log('this.fecha_vencimiento_poliza_646:', this.fecha_vencimiento_poliza_646)
  console.log('this.fecha_vencimiento_poliza_7036:', this.fecha_vencimiento_poliza_7036)
  console.log('this.fecha_vencimiento_iso:', this.fecha_vencimiento_iso)
   

  const formData = new FormData()
  
  formData.append('fecha_camaracomercio', this.fecha_camara_comercio)
  formData.append('fecha_vencimiento_poliza_646', this.fecha_vencimiento_poliza_646)
  formData.append('fecha_vencimiento_poliza_7036', this.fecha_vencimiento_poliza_7036)
  formData.append('fecha_vencimiento_iso', this.fecha_vencimiento_iso)
  formData.append('nombre', this.nombre_desintegradora)
  formData.append('razon_social', this.razon_social)
  formData.append('direccion_desintegradora', this.direccion_desintegradora)
  formData.append('nit', this.nit)
  formData.append('departamento', this.departamento)
  formData.append('ciudad', this.ciudad)
  formData.append('contacto_desintegradora', this.contacto_desintegradora)  
  formData.append('email_desintegradora', this.email_desintegradora)
  formData.append('telefono_desintegradora', this.telefono_desintegradora)


  axios.post('https://cemvid.ibingcode.com/public/guardar_desintegradora', formData)
    .then(result => {
      const msg = typeof result.data === 'string'
        ? JSON.parse(result.data)
        : result.data

      if (msg.CODIGO === 0 || msg.CODIGO === '0') {
        // Si la API devuelve el id, lo guardamos para que lo usen los q-uploader
        if (msg.ID_DESINTEGRADORA || msg.id_desintegradora) {
          this.id_desintegradora = msg.ID_DESINTEGRADORA || msg.id_desintegradora
          console.log('this.id_desintegradora:', this.id_desintegradora)
        }

        // 👉 Ahora disparamos las subidas de TODOS los q-uploader
       this.$nextTick(() => {
              const uploaders = [
                this.$refs.uplLogo,
                this.$refs.uplCamaraComercio,
                this.$refs.uplPoliza646,
                this.$refs.uplPoliza7036,
                this.$refs.uplRut,
                this.$refs.uplIso9001,
                this.$refs.uplSarlaf,
                this.$refs.uplPoliticaDatos
              ]
              uploaders.forEach(upl => {
                  if (upl) {
                    console.log('Llamando upload() de', upl)
                    upl.upload()
                  }
              })
            })
        Swal.fire({
          title: 'ÉXITO',
          text: 'Registros Guardados Correctamente',
          icon: 'success'
        })
      } else {
        Swal.fire({
          title: 'FALLO',
          text: msg.DATOS || 'Error al guardar registros',
          icon: 'error'
        })
      }
    })
    .catch(err => {
      console.error(err)
      Swal.fire({
        title: 'ERROR',
        text: 'Error al comunicarse con el servidor',
        icon: 'error'
      })
    })
}

    ,

    f_guardar_sede () {
      // 1. Separar latitud y longitud a partir del campo "ubicacion"
      let lat = ''
      let lng = ''

      if (this.ubicacion && this.ubicacion.includes(',')) {
        const partes = this.ubicacion.split(',')
        lat = partes[0].trim()
        lng = partes[1].trim()
      }

      console.log('this.nombre_sede:', this.nombre_sede)
      console.log('this.id_desintegradora_sede:', this.id_desintegradora_sede)
      console.log('this.direccion_sede:', this.direccion_sede)
      console.log('this.departamento:',this.departamento)
      console.log('this.ciudad:', this.ciudad)
      console.log('this.contacto_sede:', this.contacto_sede)
      console.log('this.email_sede:', this.email_sede)
      console.log('this.telefono_sede:', this.telefono_sede)
      console.log('lat:', lat)
      console.log('lng:', lng)
      console.log('this.radio_metros:', this.radio_metros)
      console.log('this.fecha_vencimiento_poliza_646:', this.fecha_vencimiento_poliza_646)
      console.log('this.fecha_vencimiento_poliza_7036:', this.fecha_vencimiento_poliza_7036)
      console.log('this.fecha_vencimiento_poliza:', this.fecha_vencimiento_poliza)
      console.log('this.fecha_vencimiento_salud:', this.fecha_vencimiento_salud)
      

      // 2. Enviar como FormData (igual que en f_guardar_desintegradora)
      const formData = new FormData()
      formData.append('nombre_sede', this.nombre_sede)
      formData.append('id_desintegradora_sede', this.id_desintegradora_sede) // viene del q-select
      formData.append('direccion_sede', this.direccion_sede)
      formData.append('departamento', this.departamento)
      formData.append('ciudad', this.ciudad)
      formData.append('contacto_sede', this.contacto_sede)
      formData.append('email_sede', this.email_sede)
      formData.append('telefono_sede', this.telefono_sede)
      formData.append('latitud', lat)
      formData.append('longitud', lng)
      formData.append('radio_metros', this.radio_metros)
      formData.append('fecha_vencimiento_poliza_646', this.fecha_vencimiento_poliza_646)
      formData.append('fecha_vencimiento_poliza_7036', this.fecha_vencimiento_poliza_7036)
      formData.append('fecha_vencimiento_poliza', this.fecha_vencimiento_poliza)
      formData.append('fecha_vencimiento_salud', this.fecha_vencimiento_salud)
      
      

      axios.post('https://cemvid.ibingcode.com/public/guardar_sede', formData)
        .then(res => {
          console.log('respuesta guardar_sede:', res.data)

          const msg = typeof res.data === 'string'
            ? JSON.parse(res.data)
            : res.data

      if (msg.CODIGO === 0 || msg.CODIGO === '0') {
        // Si la API devuelve el id, lo guardamos para que lo usen los q-uploader
        if (msg.ID_SEDE || msg.id_sede) {
          this.id_sede = msg.ID_SEDE || msg.id_sede
          this.id_desintegradora = this.id_desintegradora_sede
          console.log('this.id_sede:', this.id_sede, 'this.id_desintegradora:', this.id_desintegradora)
        }

        // 👉 Ahora disparamos las subidas de TODOS los q-uploader
       this.$nextTick(() => {
              const uploaders = [
                this.$refs.uplPoliza646,
                this.$refs.uplPoliza7036,
                this.$refs.uplResolucionAmbiental,
                this.$refs.uplBomberos,
                this.$refs.uplSalud,
                this.$refs.uplUsoSuelo,
  
              ]
              uploaders.forEach(upl => {
                  if (upl) {
                    console.log('Llamando upload() de', upl)
                    upl.upload()
                  }
              })
            })
        Swal.fire({
          title: 'ÉXITO',
          text: 'Registros Guardados Correctamente',
          icon: 'success'
        })
      }else{
        Swal.fire({
          title: 'FALLO',
          text: msg.DATOS || 'Error al guardar registros de sede',
          icon: 'error'
        })
    }

        })
        .catch(err => {
          console.error('Error en guardar_sede:', err)
          Swal.fire('ERROR', 'Error al comunicarse con el servidor', 'error')
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