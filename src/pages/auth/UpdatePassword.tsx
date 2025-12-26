import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function UpdatePassword() {
  const [password, setPassword] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.updateUser({
      password
    });

    if (!error) alert("Password changed!");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Create New Password</h1>

      <form onSubmit={handleUpdate}>
        <input
          type="password"
          placeholder="New Password"
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
