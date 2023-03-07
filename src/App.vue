<template>
  <Navbar />
  <main class="container" style="margin-top: 70px">
    <h1>Poniralli</h1>
    <Kisat />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Kisat from './views/Kisat.vue';

export default defineComponent({
  name: 'App',
  components: { Navbar, Kisat }
});
</script>
<style></style>
