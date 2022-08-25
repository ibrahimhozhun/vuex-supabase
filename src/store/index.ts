import supabase from '@/config/supabase';
import { User } from '@supabase/supabase-js';
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

export interface State {
  user: User | null;
  loading: boolean;
  error: {
    message: string;
    code?: string;
  } | null;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    user: null,
    error: null,
    loading: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log('user state has changed: ', state.user);
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async signup(ctx, { email, password }) {
      console.log('-----SIGNUP-----');

      ctx.commit('setLoading', true);
      ctx.commit('setError', null);

      // Send sign up request
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      // Update user state
      // If there's an error user variable will be null
      ctx.commit('setUser', user);
      ctx.commit('setLoading', false);

      // Update error state if there is any errors
      if (error) store.commit('setError', error);
    },
    async login(ctx, { email, password }) {
      console.log('-----LOGIN-----');

      ctx.commit('setLoading', true);
      ctx.commit('setError', null);

      // Send sign up request
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });

      // Update user state
      // If there's an error user variable will be null
      ctx.commit('setUser', user);
      ctx.commit('setLoading', false);

      // Update error state if there is any errors
      if (error) store.commit('setError', error);
    },
    async logout(ctx) {
      console.log('------LOGOUT------');
      await supabase.auth.signOut();

      // Reset state after logout
      ctx.commit('setUser', null);
      ctx.commit('setError', null);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
