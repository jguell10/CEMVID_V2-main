<template>
  <q-page class="q-pa-md">

    <div class="row items-center q-mb-md">
      <div class="col-12 col-md-3">
        <q-select
          v-model="filtroPeriodo"
          :options="opcionesPeriodo"
          outlined
          label="Periodo"
          dense
        />
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card flat bordered>
          <q-card-section class="text-subtitle1">
            Desintegraciones
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pa-none">
            <iframe
              :src="urlDesintegraciones"
              style="width: 100%; height: 350px; border: 0;"
            ></iframe>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat bordered>
          <q-card-section class="text-subtitle1">
            Ingresos
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pa-none">
            <iframe
              :src="urlIngresos"
              style="width: 100%; height: 350px; border: 0;"
            ></iframe>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 q-mt-md">
        <q-card flat bordered>
          <q-card-section class="text-subtitle1">
            Mapa georreferenciado
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pa-none">
            <iframe
              :src="urlMapa"
              style="width: 100%; height: 400px; border: 0;"
            ></iframe>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { computed, ref } from 'vue';

const filtroPeriodo = ref('semana');
const opcionesPeriodo = [
  { label: 'Semana actual', value: 'semana' },
  { label: 'Mes actual', value: 'mes' }
];

// Cambia estas URLs por las de tus reportes reales (Looker/PowerBI/etc.)
const baseDesintegraciones = 'https://lookerstudio.google.com/u/2/reporting/3600e7bb-3225-4cec-a37a-a11c8890b24f/page/p_r1cn7c0jyd';
const baseIngresos        = 'https://https://app.powerbi.com/view?r=eyJrIjoiMTIzNDU2LWFiYy0xMjM0LWZnaC0xMjM0NTY3ODkwIiwidCI6IjU2Nzg5MC0xMjM0LWFzZHItZmdmLTkxMjM0NTY3OCIsImMiOjF9.com/ingresos';
const baseMapa            = 'https://https://app.powerbi.com/view?r=eyJrIjoiMTIzNDU2LWFiYy0xMjM0LWZnaC0xMjM0NTY3ODkwIiwidCI6IjU2Nzg5MC0xMjM0LWFzZHItZmdmLTkxMjM0NTY3OCIsImMiOjF9.com/mapa';

const urlDesintegraciones = computed(
  () => `${baseDesintegraciones}?periodo=${filtroPeriodo.value}`
);
const urlIngresos = computed(
  () => `${baseIngresos}?periodo=${filtroPeriodo.value}`
);
const urlMapa = computed(
  () => `${baseMapa}?periodo=${filtroPeriodo.value}`
);
</script>
