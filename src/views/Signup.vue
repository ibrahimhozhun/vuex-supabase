<template>
  <div class="center">
    <form class="form-container" @submit.prevent="handleSubmit">
      <div v-if="error">{{ error.message }}</div>
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
import router from '@/router';
import { useStore } from '@/store';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SignupView',
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');
    const store = useStore();
    const error = computed(() => store.state.error);
    const user = computed(() => store.state.user);

    const handleSubmit = async () => {
      // Call signup action
      await store.dispatch('signup', {
        email: email.value,
        password: password.value,
      });

      !error.value && user.value && router.push({ name: 'home' });
    };

    return {
      handleSubmit,
      email,
      password,
      error,
    };
  },
});
</script>
