<template>
  <!-- 
    This parent div has the exact same shape as the actual navbar,
    We use it to put circles behind the navbar and create glass effect
  -->
  <div class="navbar overflow-hidden bg-transparent">
    <div
      class="h-64 w-64 bg-indigo-800 rounded-full absolute -bottom-5 right-1/2"
    />
    <div class="h-24 w-24 bg-green-600 rounded-full absolute -top-5 left-36" />
    <div
      class="h-48 w-48 bg-orange-600 rounded-full absolute -top-10 right-24"
    />
    <nav
      class="navbar bg-slate-400 shadow-xl backdrop-filter backdrop-blur-[8px] bg-opacity-30 flex items-center"
    >
      <h1 class="flex-[4] ml-12 text-2xl text-gray-900 font-bold">Vuex Auth</h1>
      <div class="flex justify-around flex-[3] text-md">
        <div class="flex justify-around w-full">
          <!-- for all users -->
          <router-link to="/">Home</router-link>
          <!-- for logged in users -->
          <template v-if="user">
            <span>{{ user?.email }}</span>
            <button class="" @click="logout">Logout</button>
          </template>
          <!-- for logged out users -->
          <template v-if="!user">
            <router-link to="/login">Login</router-link>
            <router-link to="/signup">Signup</router-link>
          </template>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import supabase from '@/config/supabase';
import { useStore } from '@/store';
import { computed, defineComponent, onBeforeMount } from 'vue';

export default defineComponent({
  name: 'NavBar',
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      // Update user state if user has logged in before
      const user = supabase.auth.user();
      store.commit('setUser', user);
    });

    const logout = () => store.dispatch('logout');

    return { logout, user: computed(() => store.state.user) };
  },
});
</script>
<style>
.navbar {
  @apply fixed top-3 inset-x-2 rounded-xl h-12;
}
</style>
