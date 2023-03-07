<template>
  <div>
    <h2>{{ kisaMalli.name }}</h2>
    <ul>
      <li v-for="poni of kisaMalli.ponit" :key="poni.id">{{ poni.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { KisaMalli } from '@/models/KisaMalli';

export default defineComponent({
  name: 'Race',

  props: {
    kisaMalli: {
      type: Object as PropType<KisaMalli>,
      required: true
    }
  }
});
</script>
