<template>
  <div class="center">
    <form class="form-container" @submit.prevent="handleSubmit">
      <h3 class="form-title">Sign up</h3>

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

      <button class="button">Sign up</button>
    </form>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SignupView",
  setup() {
    const email = ref<string>("");
    const password = ref<string>("");
    const store = useStore();

    const handleSubmit = () => {
      // Call signup action
      store.dispatch("signup", {
        email: email.value,
        password: password.value,
      });
    };

    return { handleSubmit, email, password };
  },
});
</script>
