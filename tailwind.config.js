/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradientBG 20s ease infinite",
        "pulse-slow": "pulseSlow 2.5s cubic-bezier(0.4,0,0.6,1) infinite",
        "pulse-fast": "pulseFast 1.1s cubic-bezier(0.4,0,0.6,1) infinite",
        "pulse-green": "pulseGreen 1.6s cubic-bezier(0.4,0,0.6,1) infinite",
        "flash-green": "flashGreen 1.2s linear infinite",
        "pulse-green-bg": "pulseGreenBg 1.2s ease-in-out infinite",
      },
      keyframes: {
        gradientBG: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        pulseFast: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        pulseGreen: {
          "0%, 100%": { backgroundColor: "#18181b" },
          "50%": { backgroundColor: "#22c55e" },
        },
        flashGreen: {
          "0%, 100%": {
            backgroundColor: "#18181b",
            boxShadow: "0 0 0 0 #22c55e00",
          },
          "50%": {
            backgroundColor: "#22c55e",
            boxShadow: "0 0 16px 4px #22c55e88",
          },
        },
        pulseGreenBg: {
          "0%, 100%": { backgroundColor: "#18181b" },
          "50%": { backgroundColor: "#22c55e" },
        },
      },
    },
  },
  plugins: [],
};
