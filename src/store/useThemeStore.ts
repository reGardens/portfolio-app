import { create } from 'zustand';

interface ThemeState {
    isDark: boolean;
    setIsDark: (v: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    isDark: false,
    setIsDark: (v) => set({ isDark: v }),
}));
