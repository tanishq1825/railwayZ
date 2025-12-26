// @ts-nocheck
import { serve } from "std/http/server.ts";

serve(async (req) => {

  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  try {
    const { email, otp } = await req.json();

    console.log("REQUEST HIT");
    console.log("email:", email);
    console.log("otp:", otp);
    console.log("BREVO ENV CHECK:", Deno.env.get("BREVO_API_KEY"));

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": Deno.env.get("BREVO_API_KEY"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "RailWayZ", email: "tarunprajapati12442@gmail.com" },
        to: [{ email }],
        subject: "Your RailWayZ verification code",
        htmlContent: `<p>Your OTP code is <b>${otp}</b>.</p>`,
      }),
    });

    if (!response.ok) {
      const t = await response.text();
      throw new Error("BREVO SEND ERROR: " + t);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

  } catch (error) {

    console.log("FUNCTION ERROR:", error.message);

    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }
});
