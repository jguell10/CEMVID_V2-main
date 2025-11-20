<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section class="text-h6">
        LISTADO DE INGRESOS
      </q-card-section>

      <q-card-section>
        <q-btn color="purple" icon="refresh" label="Actualizar" @click="cargarSedes" />
      </q-card-section>

      <q-card-section>
        <q-table
          :rows="sedes"
          :columns="columnas"
          row-key="id_sede"
          flat
          bordered
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListarSedes",

  data () {
    return {
      sedes: [],
      columnas: [
        { name: "id", label: "ID", field: "id_ingreso_produccion", align: "center" },
        { name: "placa", label: "PLACA", field: "placa", align: "center" },
        { name: "fecha", label: "FECHA", field: "fecha", align: "center" },
        { name: "latitud", label: "LATITUD", field: "latitud", align: "center" },
        { name: "longitud", label: "LONGITUD", field: "longitud", align: "center" }
      ]
    }
  },

  created () {
    this.cargarSedes()
  },

  methods: {
    cargarSedes () {
      axios.get("https://cemvid.ibingcode.com/public/listar_desintegraciones")
        .then(res => {
          this.sedes = res.data
        })
        .catch(err => {
          console.error(err)
          this.$q.notify({
            type: "negative",
            message: "Error cargando las sedes"
          })
        })
    }
  }
}
</script>