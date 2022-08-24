<template>
  <div class="center">
    <form class="form-container" @submit.prevent="handleSubmit">
      <h3 class="form-title">Login</h3>

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

      <button class="button">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginView",
  setup() {
    const email = ref<string>("");
    const password = ref<string>("");

    const handleSubmit = () => {
      console.log(email.value, password.value);
    };

    return { handleSubmit, email, password };
  },
});
</script>

<style>
.input {
  @apply rounded-md bg-slate-300 text-neutral-900 placeholder:text-amber-600 caret-slate-900 p-3 m-2;
}

.form-container {
  @apply bg-slate-900 text-slate-300 rounded-xl shadow-lg flex flex-col items-center p-16;
}

.form-title {
  @apply font-bold text-3xl mb-2;
}

.center {
  @apply flex items-center justify-center h-screen;
}

.button {
  @apply bg-orange-500 text-slate-900 rounded-lg mt-1 w-1/2 py-2 transition-all duration-500 hover:font-bold hover:scale-105 hover:bg-orange-400;
}
</style>
