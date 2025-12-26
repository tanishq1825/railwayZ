import { useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';
import { useThemeStore } from '@/stores/themeStore';

export function AuthInitializer({ children }: { children: React.ReactNode }) {
  const initialize = useAuthStore((state) => state.initialize);
  const isDark = useThemeStore((state) => state.isDark);

  // Initialize auth on mount
  useEffect(() => {
    initialize();
  }, [initialize]);

  // Ensure theme is applied on initial load and stays consistent
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return <>{children}</>;
}
