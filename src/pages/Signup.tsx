import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  Train,
  User,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";

export default function Signup() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [otpStep, setOtpStep] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpInput, setOtpInput] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setFormData((p) => ({ ...p, phone: cleaned }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const passwordStrength = (() => {
    let score = 0;
    if (formData.password.length > 7) score++;
    if (/[A-Z]/.test(formData.password)) score++;
    if (/[0-9]/.test(formData.password)) score++;
    if (/[^A-Za-z0-9]/.test(formData.password)) score++;
    return score;
  })();

  let strengthColor =
    passwordStrength <= 1 ? "bg-red-500"
      : passwordStrength === 2 ? "bg-yellow-500"
      : passwordStrength >= 3 ? "bg-green-500"
      : "bg-gray-500";

  let strengthLabel =
    passwordStrength <= 1 ? "Weak"
      : passwordStrength === 2 ? "Medium"
      : passwordStrength >= 3 ? "Strong"
      : "";

  // SEND OTP
  const sendOTP = async () => {

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setOtpStep(true);

    try {

      const response = await fetch(
        "https://uejsryqwaoekmwqgnwqx.supabase.co/functions/v1/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            otp,
          }),
        }
      );

      if (!response.ok) {
        const text = await response.text();
        console.log("OTP ERROR:", text);
        throw new Error("OTP delivery failed");
      }

      toast({
        title: "Verification Email Sent",
        description: `OTP sent to ${formData.email}`,
      });

    } catch (error) {
      toast({
        title: "Email Failed",
        description: "Could not send OTP email",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpStep) {
      await sendOTP();
      return;
    }

    if (otpInput !== generatedOtp) {
      toast({
        title: "Invalid OTP",
        description: "Incorrect verification code",
        variant: "destructive",
      });
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      toast({
        title: "Signup Failed",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Account created!",
    });

    navigate("/login");
  };

  return (
    <Layout>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-card p-8">

            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-2 mb-6">
                <Train className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">
                  Rail<span className="text-primary">Way</span>
                  <span className="text-accent">Z</span>
                </span>
              </Link>

              <h1 className="text-2xl font-bold">
                {otpStep ? "Verify Email" : "Create Account"}
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {!otpStep && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="w-full h-12 pl-11 pr-4 rounded-lg bg-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full h-12 pl-11 pr-4 rounded-lg bg-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="9999999999"
                        className="w-full h-12 pl-11 pr-4 rounded-lg bg-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Create password"
                        className="w-full h-12 pl-11 pr-12 rounded-lg bg-secondary"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>

                    {formData.password !== "" && (
                      <div className="mt-1">
                        <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${strengthColor}`}
                            style={{ width: `${passwordStrength * 25}%` }}
                          ></div>
                        </div>
                        <p className="text-xs mt-1 text-center font-medium">
                          {strengthLabel}
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Confirm Password
                    </label>

                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder="Re-enter password"
                        className="w-full h-12 pl-11 pr-12 bg-secondary rounded-lg"
                      />

                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        {showConfirmPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Continue
                  </Button>
                </>
              )}

              {otpStep && (
                <div className="space-y-6">
                  <p className="text-center text-muted-foreground">
                    Enter the 6-digit code sent to:
                    <span className="font-medium text-primary block">
                      {formData.email}
                    </span>
                  </p>

                  <input
                    type="text"
                    maxLength={6}
                    value={otpInput}
                    onChange={(e) =>
                      setOtpInput(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="XXXXXX"
                    className="text-center tracking-widest text-3xl w-full py-4 rounded-xl bg-secondary"
                  />

                  <Button type="submit" size="lg" className="w-full">
                    Verify & Create Account
                  </Button>

                  <button
                    type="button"
                    onClick={sendOTP}
                    className="text-primary block mx-auto text-sm"
                  >
                    Resend Code
                  </button>
                </div>
              )}

            </form>

            {!otpStep && (
              <p className="text-center text-muted-foreground mt-6">
                Already have account?{" "}
                <Link to="/login" className="text-primary font-medium">
                  Sign In
                </Link>
              </p>
            )}

            <Link
              to="/"
              className="flex items-center justify-center gap-2 text-muted-foreground mt-4 text-sm"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

          </div>
        </div>
      </section>
    </Layout>
  );
}
