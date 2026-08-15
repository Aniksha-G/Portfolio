"use client"; // Mark this component as a Client Component

import { ThemeProvider } from "next-themes";

export default function Provider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}