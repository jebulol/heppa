<template>
  <div>
    <h2>{{ raceModel.name }}</h2>
    <ul>
      <li v-for="pony of raceModel.ponies" :key="pony.id">{{ pony.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RaceModel } from '@/models/RaceModel';

export default defineComponent({
  name: 'Race',

  props: {
    raceModel: {
      type: Object as PropType<RaceModel>,
      required: true
    }
  }
});
</script>
