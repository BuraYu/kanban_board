import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000112",
        veryDarkGray: "#20212C",
        darkGray: "#2B2C37",
        linesDark: "#3E3F4E",
        mediumGray: "#828FA3",
        linesLight: "#E4EBFA",
        lightGrey: "#F4F7FD",
        white: "#FFFFFF",
        mainPurple: "#635FC7",
        mainPurpleHover: "#A8A4FF",
        red: "#EA5555",
        redHover: "#FF9898",
      },
    },
  },
} satisfies Config;
