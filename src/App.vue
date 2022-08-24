<template>
  <div class="bg-slate-600 min-h-screen">
    <Navbar />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
});
</script>

<style></style>
