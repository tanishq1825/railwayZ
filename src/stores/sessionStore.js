import { create } from "zustand";
import { supabase } from "@/integrations/supabase/client";

export const useSessionStore = create((set) => ({
  session: null,
  user: null,
  loading: true,

  initSession: async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    set({
      session,
      user: session?.user ?? null,
      loading: false,
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      set({
        session,
        user: session?.user ?? null,
      });
    });
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ session: null, user: null });
  }
}));
