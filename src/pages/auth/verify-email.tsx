import { useLocation } from "react-router-dom";

export default function VerifyEmail() {
  const location = useLocation();
  const email = location.state?.email || "";

  return (
    <div style={{ padding:"40px", textAlign:"center" }}>
      <h1>Check your email</h1>
      <p>We sent a verification link to:</p>
      <h3>{email}</h3>
    </div>
  );
}
