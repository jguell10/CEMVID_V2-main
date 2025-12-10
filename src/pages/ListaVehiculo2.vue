<template>
  <div class="q-pa-md">
    <!-- LISTADO -->
    <q-card style="width: 100%" v-show="components_1">
      <div class="q-pa-md">
        <q-table
          :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
          :rows="vehiculo"
          :columns="headers_vehiculo"
          row-key="id_ingreso"
          @row-click="DetalleDesintegracion"
        />
      </div>
    </q-card>

    <!-- DETALLE CON BOTONES DE SECCIONES -->
    <q-card style="width: 100%" v-show="components_2">
      <q-item
        clickable
        v-ripple
        class="rounded-borders"
        :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
      >
        <q-item-section>
          <q-item-label class="text-h6"> GUARISMO </q-item-label>
          <q-item-label caption>PLACA: {{ placa }} &nbsp; | &nbsp; REG: {{ numero_registro }}</q-item-label>
        </q-item-section>

        <q-btn color="purple" glossy icon="arrow_back" @click="backToList" />
      </q-item>

      <q-card-section>
        <!-- Botones estilo "chevrón" reemplazan a los q-btns -->
        <div class="q-pa-sm">
          <div class="steps-container">
            <div
              class="step"
              :class="[ statusClass('cabina'), { active: activeSection === 'cabina' } ]"
              @click="mostrarSolo('cabina')"
              title="Cabina"
            >
              <span>Cabina</span>
            </div>

            <div
              class="step"
              :class="[ statusClass('chasis'), { active: activeSection === 'chasis' } ]"
              @click="mostrarSolo('chasis')"
              title="Chasis"
            >
              <span>Chasis</span>
            </div>

            <div
              class="step"
              :class="[ statusClass('motor'), { active: activeSection === 'motor' } ]"
              @click="mostrarSolo('motor')"
              title="Motor"
            >
              <span>Motor</span>
            </div>

            <div
              class="step"
              :class="[ statusClass('plaquetas'), { active: activeSection === 'plaquetas' } ]"
              @click="mostrarSolo('plaquetas')"
              title="Plaquetas"
            >
              <span>Plaquetas</span>
            </div>

            <div
              class="step"
              :class="[ statusClass('placa'), { active: activeSection === 'placa' } ]"
              @click="mostrarSolo('placa')"
              title="Placa"
            >
              <span>Placa</span>
            </div>

            <div
              class="step last"
              :class="[ statusClass('completo'), { active: activeSection === 'completo' } ]"
              @click="mostrarSolo('completo')"
              title="Vehículo"
            >
              <span>Vehículo</span>
            </div>
          </div>
        </div>

        <q-separator />

        <!-- Si aún no quieres ver soportes -->
        <div v-if="!mostrarMultimedia" class="q-pa-sm">
          <q-btn color="purple" label="Ver soportes" @click="mostrarMultimedia = true" />
        </div>

        <!-- CONTENIDO: mostramos la sección activa -->
        <div v-if="mostrarMultimedia" class="q-pa-sm">
          <!-- Motor -->
          <div v-if="activeSection === 'motor'">
            <div class="row q-col-gutter-md" v-if="hasMotor">
              <!-- Foto lado izquierdo -->
              <div class="col-6">
                <q-img :src="baseUrl + firstMotorFoto.ruta" :ratio="16/9" style="border:3px solid purple; border-radius:10px" v-if="firstMotorFoto" />
                <div v-if="firstMotorFoto" class="text-center" style="font-weight:600; margin-top:6px;">{{ getFileName(firstMotorFoto.ruta) }}</div>
                <div v-else>
                  <q-banner dense class="bg-grey-2 text-black">No existe <strong>foto_motor_desintegrado_1</strong>.</q-banner>
                </div>
              </div>

              <!-- Video lado derecho -->
              <div class="col-6">
                <q-video :src="baseUrl + firstMotorVideo.ruta" :ratio="16/9" style="border:3px solid purple; border-radius:10px" controls v-if="firstMotorVideo" />
                <div v-if="firstMotorVideo" class="text-center" style="font-weight:600; margin-top:6px;">{{ getFileName(firstMotorVideo.ruta) }}</div>
                <div v-else>
                  <q-banner dense class="bg-grey-2 text-black">No existe <strong>video_motor_desintegrado_2</strong>.</q-banner>
                </div>
              </div>
            </div>

            <div v-else class="q-pa-sm">
              <q-banner dense class="bg-grey-2 text-black">No se encontraron soportes para Motor.</q-banner>
            </div>
          </div>

          <!-- Cabina -->
          <div v-if="activeSection === 'cabina'">
            <div class="row q-col-gutter-md" v-if="hasCabina">
              <div class="col-6">
                <q-img :src="baseUrl + firstCabinaFoto.ruta" :ratio="16/9" style="border:3px solid purple; border-radius:10px" v-if="firstCabinaFoto" />
                <div v-if="firstCabinaFoto" class="text-center" style="font-weight:600; margin-top:6px;">{{ getFileName(firstCabinaFoto.ruta) }}</div>
                <div v-else><q-banner dense class="bg-grey-2 text-black">No existe <strong>foto_cabina_desintegrado_1</strong>.</q-banner></div>
              </div>
              <div class="col-6">
                <q-video :src="baseUrl + firstCabinaVideo.ruta" :ratio="16/9" style="border:3px solid purple; border-radius:10px" controls v-if="firstCabinaVideo" />
                <div v-if="firstCabinaVideo" class="text-center" style="font-weight:600; margin-top:6px;">{{ getFileName(firstCabinaVideo.ruta) }}</div>
                <div v-else><q-banner dense class="bg-grey-2 text-black">No existe <strong>video_cabina_desintegrado_2</strong>.</q-banner></div>
              </div>
            </div>
            <div v-else class="q-pa-sm"><q-banner dense class="bg-grey-2 text-black">No se encontraron soportes para Cabina.</q-banner></div>
          </div>

          <!-- Chasis -->
          <div v-if="activeSection === 'chasis'">
            <div class="row q-col-gutter-md" v-if="hasChasis">
              <div class="col-6">
                <q-img :src="baseUrl + firstChasisFoto.ruta" :ratio="16/9" style="border:3px solid purple; border-radius:10px" v-if="firstChasisFoto" />
                <div v-if="firstChasisFoto" class="text-center" style="font-weight:600; margin-top:6px;">{{ getFileName(firstChasisFoto.ruta) }}</div>
                <div v-else><q-banner dense class="bg-grey-2 text-black">No existe <strong>foto_chasis_desintegrado_1</strong>.</q-banner></div>
              </div>
              <div class="col-6">
                <q-video :src="baseUrl + firstChasisVideo.ruta" :ratio="16/9" style="border:3px solid purple; border-radius:10px" controls v-if="firstChasisVideo" />
                <div v-if="firstChasisVideo" class="text-center" style="font-weight:600; margin-top:6px;">{{ getFileName(firstChasisVideo.ruta) }}</div>
                <div v-else><q-banner dense class="bg-grey-2 text-black">No existe <strong>video_chasis_desintegrado_2</strong>.</q-banner></div>
              </div>
            </div>
            <div v-else class="q-pa-sm"><q-banner dense class="bg-grey-2 text-black">No se encontraron soportes para Chasis.</q-banner></div>
          </div>

          <!-- Placa -->
          <div v-if="activeSection === 'placa'">
            <div class="row q-col-gutter-md" v-if="hasPlaca">
              <div class="col-6">
                <q-img :src="baseUrl + firstPlacaFoto.ruta" :ratio="16/9" style="border:3px solid purple; border-radius:10px" v-if="firstPlacaFoto" />
                <div v-if="firstPlacaFoto" class="text-center" style="font-weight:600; margin-top:6px;">{{ getFileName(firstPlacaFoto.ruta) }}</div>
                <div v-else><q-banner dense class="bg-grey-2 text-black">No existe <strong>foto_placa_desintegrado_1</strong>.</q-banner></div>
              </div>
              <div class="col-6">
                <q-video :src="baseUrl + firstPlacaVideo.ruta" :ratio="16/9" style="border:3px solid purple; border-radius:10px" controls v-if="firstPlacaVideo" />
                <div v-if="firstPlacaVideo" class="text-center" style="font-weight:600; margin-top:6px;">{{ getFileName(firstPlacaVideo.ruta) }}</div>
                <div v-else><q-banner dense class="bg-grey-2 text-black">No existe <strong>video_placa_desintegrado_2</strong>.</q-banner></div>
              </div>
            </div>
            <div v-else class="q-pa-sm"><q-banner dense class="bg-grey-2 text-black">No se encontraron soportes para Placa.</q-banner></div>
          </div>

          <!-- Vehículo completo -->
          <div v-if="activeSection === 'completo'">
            <div class="row q-col-gutter-md" v-if="hasCompleto">
              <div class="col-6">
                <q-img :src="baseUrl + firstCompletoFoto.ruta" :ratio="16/9" style="border:3px solid purple; border-radius:10px" v-if="firstCompletoFoto" />
                <div v-if="firstCompletoFoto" class="text-center" style="font-weight:600; margin-top:6px;">{{ getFileName(firstCompletoFoto.ruta) }}</div>
                <div v-else><q-banner dense class="bg-grey-2 text-black">No existe <strong>foto_completo_desintegrado_1</strong>.</q-banner></div>
              </div>
              <div class="col-6">
                <q-video :src="baseUrl + firstCompletoVideo.ruta" :ratio="16/9" style="border:3px solid purple; border-radius:10px" controls v-if="firstCompletoVideo" />
                <div v-if="firstCompletoVideo" class="text-center" style="font-weight:600; margin-top:6px;">{{ getFileName(firstCompletoVideo.ruta) }}</div>
                <div v-else><q-banner dense class="bg-grey-2 text-black">No existe <strong>video_completo_desintegrado_2</strong>.</q-banner></div>
              </div>
            </div>
            <div v-else class="q-pa-sm"><q-banner dense class="bg-grey-2 text-black">No se encontraron soportes para Vehículo completo.</q-banner></div>
          </div>

          <!-- Plaquetas -->
          <div v-if="activeSection === 'plaquetas'">
            <div class="row q-col-gutter-md" v-if="hasPlaquetas">
              <div class="col-6">
                <q-img :src="baseUrl + firstPlaquetaFoto.ruta" :ratio="16/9" style="border:3px solid purple; border-radius:10px" v-if="firstPlaquetaFoto" />
                <div v-if="firstPlaquetaFoto" class="text-center" style="font-weight:600; margin-top:6px;">{{ getFileName(firstPlaquetaFoto.ruta) }}</div>
                <div v-else><q-banner dense class="bg-grey-2 text-black">No existe <strong>foto_plaqueta_desintegrado_1</strong>.</q-banner></div>
              </div>
              <div class="col-6">
                <q-video :src="baseUrl + firstPlaquetaVideo.ruta" :ratio="16/9" style="border:3px solid purple; border-radius:10px" controls v-if="firstPlaquetaVideo" />
                <div v-if="firstPlaquetaVideo" class="text-center" style="font-weight:600; margin-top:6px;">{{ getFileName(firstPlaquetaVideo.ruta) }}</div>
                <div v-else><q-banner dense class="bg-grey-2 text-black">No existe <strong>video_plaquetas_desintegrado_2</strong>.</q-banner></div>
              </div>
            </div>
            <div v-else class="q-pa-sm"><q-banner dense class="bg-grey-2 text-black">No se encontraron soportes para Plaquetas.</q-banner></div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "ListaVehiculo2",
  data() {
    return {
      baseUrl: "https://soportescemvid.ibingcode.com/",
      vehiculo: [],
      rutas: [],
      placa: "",
      numero_registro: "",
      mostrarMultimedia: false,
      components_1: false,
      components_2: false,
      activeSection: "cabina", // sección activa por defecto
      headers_vehiculo: [
        { label: "#REGISTRO", field: "id_ingreso", name: "id_ingreso", align: "center" },
        { label: "PLACA", field: "placa", name: "placa", align: "center" },
        { label: "FECHA_INGRESO", field: "fecha_ingreso", name: "fecha_ingreso", align: "center" },
        { label: "LATITUD", field: "latitud", name: "latitud", align: "center" },
        { label: "LONGITUD", field: "longitud", name: "longitud", align: "center" }
      ]
    };
  },

  created() {
    this.ListaDesintegracion();
  },

  computed: {
    /* -------------------- Motor -------------------- */
    firstMotorFoto() {
      return this.rutas.find(r => r.ruta && /foto_motor_desintegrado_1\.(jpg|jpeg|png)$/i.test(r.ruta)) || null;
    },
    firstMotorVideo() {
      return this.rutas.find(r => r.ruta && /video_motor_desintegrado_2\.(mp4|mov|avi)$/i.test(r.ruta)) || null;
    },
    hasMotor() {
      return !!this.firstMotorFoto || !!this.firstMotorVideo;
    },

    /* -------------------- Cabina -------------------- */
    firstCabinaFoto() {
      return this.rutas.find(r => r.ruta && /foto_cabina_desintegrado_1\.(jpg|jpeg|png)$/i.test(r.ruta)) || null;
    },
    firstCabinaVideo() {
      return this.rutas.find(r => r.ruta && /video_cabina_desintegrado_2\.(mp4|mov|avi)$/i.test(r.ruta)) || null;
    },
    hasCabina() {
      return !!this.firstCabinaFoto || !!this.firstCabinaVideo;
    },

    /* -------------------- Chasis -------------------- */
    firstChasisFoto() {
      return this.rutas.find(r => r.ruta && /foto_chasis_desintegrado_1\.(jpg|jpeg|png)$/i.test(r.ruta)) || null;
    },
    firstChasisVideo() {
      return this.rutas.find(r => r.ruta && /video_chasis_desintegrado_2\.(mp4|mov|avi)$/i.test(r.ruta)) || null;
    },
    hasChasis() {
      return !!this.firstChasisFoto || !!this.firstChasisVideo;
    },

    /* -------------------- Placa -------------------- */
    firstPlacaFoto() {
      return this.rutas.find(r => r.ruta && /foto_placa_desintegrado_1\.(jpg|jpeg|png)$/i.test(r.ruta)) || null;
    },
    firstPlacaVideo() {
      return this.rutas.find(r => r.ruta && /video_placa_desintegrado_2\.(mp4|mov|avi)$/i.test(r.ruta)) || null;
    },
    hasPlaca() {
      return !!this.firstPlacaFoto || !!this.firstPlacaVideo;
    },

    /* -------------------- Completo (vehículo) -------------------- */
    firstCompletoFoto() {
      return this.rutas.find(r => r.ruta && /foto_completo_desintegrado_1\.(jpg|jpeg|png)$/i.test(r.ruta)) || null;
    },
    firstCompletoVideo() {
      return this.rutas.find(r => r.ruta && /video_completo_desintegrado_2\.(mp4|mov|avi)$/i.test(r.ruta)) || null;
    },
    hasCompleto() {
      return !!this.firstCompletoFoto || !!this.firstCompletoVideo;
    },

    /* -------------------- Plaquetas -------------------- */
    firstPlaquetaFoto() {
      return this.rutas.find(r => r.ruta && /foto_plaqueta_desintegrado_1\.(jpg|jpeg|png)$/i.test(r.ruta)) || null;
    },
    firstPlaquetaVideo() {
      return this.rutas.find(r => r.ruta && /video_plaquetas_desintegrado_2\.(mp4|mov|avi)$/i.test(r.ruta)) || null;
    },
    hasPlaquetas() {
      return !!this.firstPlaquetaFoto || !!this.firstPlaquetaVideo;
    }
  },

  methods: {
    ListaDesintegracion() {
      const datos = { fecha_inicio: "", fecha_fin: "" };
      axios.post("https://cemvid.ibingcode.com/public/listarTodosIngresos", datos)
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

    DetalleDesintegracion(evt, row) {
      const selected = (row && row.id_ingreso) ? row : (evt && evt.id_ingreso ? evt : null);
      if (!selected) {
        console.error("DetalleDesintegracion: fila inválida", { evt, row });
        return;
      }

      this.placa = selected.placa || "";
      this.numero_registro = selected.id_ingreso || selected.id || "";
      this.components_1 = false;
      this.components_2 = true;
      this.activeSection = "cabina";
      this.mostrarMultimedia = false;

      // Traer soportes
      axios.post("https://cemvid.ibingcode.com/public/getsoportes", { codigo_ingreso: this.numero_registro })
        .then(res => {
          this.rutas = Array.isArray(res.data) ? res.data : [];
          this.mostrarMultimedia = true;

          // notificar si faltan archivos esperados (no intrusivo)
          const missing = [];
          if (!this.firstCabinaFoto) missing.push("No se encontro foto cabina desintegrado");
          if (!this.firstCabinaVideo) missing.push("No se encontro video cabina desintegrado");
          if (!this.firstChasisFoto) missing.push("No se encontro foto chasis desintegrado");
          if (!this.firstChasisVideo) missing.push("No se encontro video chasis desintegrado");
          if (!this.firstMotorFoto) missing.push("No se encontro foto motor desintegrado");
          if (!this.firstMotorVideo) missing.push("No se encontro video motor desintegrado");
          if (!this.firstPlaquetaFoto) missing.push("No se encontro foto plaqueta desintegrado");
          if (!this.firstPlaquetaVideo) missing.push("No se encontro video plaqueta desintegrado");
          if (!this.firstPlacaFoto) missing.push("No se encontro foto placa desintegrado");
          if (!this.firstPlacaVideo) missing.push("No se encontro video placa desintegrado");
          if (!this.firstCompletoFoto) missing.push("No se encontro foto vehiculo desintegrado");
          if (!this.firstCompletoVideo) missing.push("No se encontro video vehiculo desintegrado");

          if (missing.length > 0) {
            const htmlList = `<ul style="text-align:left; margin:0; padding-left:18px;">${missing.map(m => `<li>${m}</li>`).join("")}</ul>`;
            Swal.fire({
              title: "Existen multimedias faltantes para este vehiculo",
              icon: "warning",
              html: htmlList,
              confirmButtonText: "Cerrar"
            });
          }
        })
        .catch(err => {
          console.error("Error getsoportes:", err);
          Swal.fire({ title: "Error", text: "No se pudieron obtener los soportes", icon: "error" });
          this.rutas = [];
        });
    },

    // muestra solo la sección pedida y deja la vista de multimedia visible
    mostrarSolo(section) {
      this.activeSection = section;
      this.mostrarMultimedia = true;
    },

    openInNewTab(url) {
      window.open(url, "_blank");
    },

    backToList() {
      this.components_2 = false;
      this.components_1 = true;
      this.rutas = [];
      this.mostrarMultimedia = false;
      this.activeSection = "cabina";
      this.placa = "";
      this.numero_registro = "";
    },

    getFileName(path) {
      if (!path) return "";
      const parts = path.split("/");
      return parts[parts.length - 1];
    },

    // Devuelve 0/1/2: cuantos archivos existen para la sección
    statusCount(section) {
      switch (section) {
        case 'cabina':
          return (this.firstCabinaFoto ? 1 : 0) + (this.firstCabinaVideo ? 1 : 0);
        case 'chasis':
          return (this.firstChasisFoto ? 1 : 0) + (this.firstChasisVideo ? 1 : 0);
        case 'motor':
          return (this.firstMotorFoto ? 1 : 0) + (this.firstMotorVideo ? 1 : 0);
        case 'plaquetas':
          return (this.firstPlaquetaFoto ? 1 : 0) + (this.firstPlaquetaVideo ? 1 : 0);
        case 'placa':
          return (this.firstPlacaFoto ? 1 : 0) + (this.firstPlacaVideo ? 1 : 0);
        case 'completo':
          return (this.firstCompletoFoto ? 1 : 0) + (this.firstCompletoVideo ? 1 : 0);
        default:
          return 0;
      }
    },

    // Devuelve la clase CSS según cuántos archivos existen
    statusClass(section) {
      const cnt = this.statusCount(section);
      if (cnt === 2) return 's-green';
      if (cnt === 1) return 's-yellow';
      return 's-red';
    }
  }
};
</script>

<style scoped>
.my-custom-toggle { border: 1px solid #027be3; }

/* Contenedor horizontal de chevrons */
.steps-container {
  display: flex;
  align-items: stretch;
  gap: 8px;
  padding: 6px 4px;
  overflow-x: auto;
}

/* Cada chevron */
.step {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 130px;
  padding: 10px 26px;
  font-weight: 600;
  color: white;
  border: 3px solid #2f5aa3; /* borde azul como en tu imagen */
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  transition: transform .12s ease, box-shadow .12s ease, opacity .12s ease;
  text-align: center;
  z-index: 1;
}

/* Flecha derecha tipo chevron */
.step::after {
  content: "";
  position: absolute;
  right: -18px;
  top: -3px;
  width: 36px;
  height: calc(100% + 6px);
  transform: skewX(-30deg);
  border-right: 3px solid #2f5aa3;
  z-index: -1;
}

/* Ocultar flecha del último elemento para que no sobresalga */
.step.last::after {
  display: none;
}

/* Colores por estado */
.s-green { background: #09a95f; } /* verde */
.s-yellow { background: #f1c40f; color: #111; } /* amarillo */
.s-red { background: #e74c3c; } /* rojo */

/* Marca cuando está activo (seleccionado) */
.step.active {
  box-shadow: inset 0 0 0 4px rgba(128,0,128,0.18);
  transform: translateY(-2px);
}

/* Ajustes responsivos: tamaños más pequeños en pantallas chicas */
@media (max-width: 720px) {
  .step { min-width: 100px; padding: 8px 18px; }
  .step::after { right: -14px; width: 28px; height: calc(100% + 4px); }
}
</style>