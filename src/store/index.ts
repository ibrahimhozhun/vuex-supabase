import supabase from "@/config/supabase";
import { User } from "@supabase/supabase-js";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface State {
  user: User | null;
  loading: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    user: null,
    loading: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state has changed: ", state.user);
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async signup(ctx, { email, password }) {
      console.log("-----SIGNUP-----");

      try {
        ctx.commit("setLoading", true);

        // Sign up user
        const { user, session, error } = await supabase.auth.signUp({
          email,
          password,
        });

        // TODO: Handle errors
        if (error) console.log("ERROR: ", error);

        console.log("SESSION: ", session);

        // Set the user state
        ctx.commit("setUser", user);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        ctx.commit("setLoading", false);
      }
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
