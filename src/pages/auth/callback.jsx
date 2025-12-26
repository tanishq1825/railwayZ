import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuth = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession();

      if (error) {
        console.error("OAuth Error:", error);
      }

      navigate("/");
    };

    handleOAuth();
  }, [navigate]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Signing you in...</h1>
    </div>
  );
}
