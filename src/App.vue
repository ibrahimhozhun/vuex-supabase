<template>
  <div class="bg-slate-600 min-h-screen">
    <Navbar />
    <div class="pt-16">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
});
</script>

<style></style>
