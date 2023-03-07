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
import { KisaMalli } from '@/models/KisaMalli';

export default defineComponent({
  name: 'Race',

  props: {
    raceModel: {
      type: Object as PropType<KisaMalli>,
      required: true
    }
  }
});
</script>
