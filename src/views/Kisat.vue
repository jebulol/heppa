<template>
    <div>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <div v-for="kisa in kisat">
        <h2>{{ kisa.nimi }}</h2>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import { KisaMalli } from '@/models/KisaMalli';

export default defineComponent({
    name: 'Kisat',
    setup() {
      const kisat = ref<Array<KisaMalli>>([{ nimi: 'Vermo' }, { nimi: 'Killeri' }]);
      return { kisat };
    }}
)
</script>