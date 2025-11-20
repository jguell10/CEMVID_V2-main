<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section class="text-h6">
        LISTADO DE SEDES
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
        { name: "id", label: "ID", field: "id_sede", align: "center" },
        { name: "nombre", label: "Nombre", field: "nombre" },
        { name: "desintegradora", label: "Desintegradora", field: "nombre_desintegradora" },
        { name: "contacto", label: "Contacto", field: "persona_contacto" },
        { name: "direccion", label: "Dirección", field: "direccion" },
        { name: "email", label: "Email", field: "email" },
        { name: "telefono", label: "Teléfono", field: "telefono" },
        { name: "latitud", label: "Latitud", field: "latitud" },
        { name: "longitud", label: "Longitud", field: "longitud" }
      ]
    }
  },

  created () {
    this.cargarSedes()
  },

  methods: {
    cargarSedes () {
      axios.get("https://cemvid.ibingcode.com/public/listar_sedes")
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