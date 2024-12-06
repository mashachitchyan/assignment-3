import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'lime': '#E5FB6F',
        'lime-hover': '#F4FFB8',
        'black': '#121212',
        'off-black': '#202020',
        'white-30': 'rgba(244, 255, 284, 0.3)',
        'white-10': 'rgba(244, 255, 284, 0.1)',
        'dark-grey': '#383838',
        'light-grey': '#797971'
      },
    },
  },
  plugins: [],
} satisfies Config;
function rgba(arg0: number, arg1: number, arg2: number, arg3: number): string | import("tailwindcss/types/config").RecursiveKeyValuePair<string, string> {
  throw new Error("Function not implemented.");
}

