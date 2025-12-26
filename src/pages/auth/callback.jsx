import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function AuthCallback() {
  useEffect(() => {
    const handleOAuth = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession();

      if (error) {
        console.error("OAuth Error:", error);
      }

      // ✅ force correct domain (localhost OR vercel)
      window.location.href = window.location.origin;
    };

    handleOAuth();
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Signing you in...</h1>
    </div>
  );
}
