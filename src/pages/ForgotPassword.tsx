import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-hero-gradient px-4">
        <div className="w-full max-w-md bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-foreground">
              Reset Your Password
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
              Enter your registered email and we’ll send you a reset link
            </p>
          </div>

          {/* Email Input */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            {/* CTA Button */}
            <Button
              variant="accent"
              size="lg"
              className="w-full"
            >
              Send Reset Link
            </Button>
          </div>

          {/* Back to login */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Login
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
