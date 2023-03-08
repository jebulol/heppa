<template>
  <div>
    <h2>{{ kisaMalli.name }}</h2>
    <p>{{ alkuAika }}</p>
    <ul>
      <li v-for="poni of kisaMalli.ponit" :key="poni.id">{{ poni.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { KisaMalli } from '@/models/KisaMalli';
import Alkuun from '@/utils/Alkuun';

export default defineComponent({
  name: 'Kisa',
  props: {
    kisaMalli: {
      type: Object as PropType<KisaMalli>,
      required: true
    }
  },
  setup(props) {
    const alkuAika = computed(() => Alkuun(props.kisaMalli.startInstant));
    return { alkuAika };
  }
});
</script>
