import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthInitializer } from "@/components/AuthInitializer";
import ProtectedRoute from "@/pages/ProtectedRoute";

import Home from "./pages/Home";
import Stations from "./pages/Stations";
import Facilities from "./pages/Facilities";
import NavigationPage from "./pages/Navigation";
import Alerts from "./pages/Alerts";
import About from "./pages/About";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ForgotPassword from "./pages/auth/ForgotPassword";
import UpdatePassword from "./pages/auth/UpdatePassword";
import VerifyEmail from "./pages/auth/verify-email";
import AuthCallback from "./pages/auth/callback";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthInitializer>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>

            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/auth/callback" element={<AuthCallback />} />

            {/* PROTECTED ROUTES */}
            <Route
              path="/stations"
              element={
                <ProtectedRoute>
                  <Stations />
                </ProtectedRoute>
              }
            />

            <Route
              path="/facilities"
              element={
                <ProtectedRoute>
                  <Facilities />
                </ProtectedRoute>
              }
            />

            <Route
              path="/navigation"
              element={
                <ProtectedRoute>
                  <NavigationPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/alerts"
              element={
                <ProtectedRoute>
                  <Alerts />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>

      </AuthInitializer>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
