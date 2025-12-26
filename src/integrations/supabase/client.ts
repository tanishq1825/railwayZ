import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  "https://uejsryqwaoekmwqgnwqx.supabase.co",
  "sb_publishable_5hQLEqU2cXN57zCDiLwikQ_vSSg6qA6"
);

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:5173/auth/callback",
    },
  });

  if (error) console.error(error);
  return data;
};
