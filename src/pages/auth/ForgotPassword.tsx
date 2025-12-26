import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Reset link sent to your email!");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Reset Password</h1>

      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>

      <p>{message}</p>

      <Link to="/login">Back to login</Link>
    </div>
  );
}
