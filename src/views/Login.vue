<template>
  <div class="flex items-center justify-center h-screen">
    <form class="form-container" @submit.prevent="handleSubmit">
      <h3 class="font-bold text-3xl mb-2">Login</h3>

      <input
        aria-label="email"
        class="input"
        type="email"
        name="email"
        placeholder="Email Address"
        v-model="email"
        required
      />

      <input
        class="input"
        type="password"
        name="password"
        placeholder="Password"
        v-model="password"
        required
      />

      <button>Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "LoginView" });
</script>

<style>
.input {
  @apply rounded-md bg-slate-200 text-neutral-900 placeholder:text-amber-600 caret-slate-900 p-4 m-2;
}

.form-container {
  @apply bg-slate-900 text-slate-300 rounded-xl shadow-lg flex flex-col items-center p-16;
}
</style>
