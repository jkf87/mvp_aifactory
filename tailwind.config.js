/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#ebeff3",
        gray: "rgba(255, 255, 255, 0.8)",
        white: "#fff",
        lightgray: "#c5d1dd",
        darkgray: "#b3b3b3",
        black: "#000",
        lightsteelblue: "#98acbf",
        darkslategray: "#183552",
        slateblue: "#7d4cc3",
        dodgerblue: "#1f7edc",
      },
      fontFamily: {
        pretendard: "Pretendard",
        "yoon-meolijeongche2s": "'Yoon Meolijeongche2S'",
      },
      borderRadius: {
        "2xs": "11px",
        "4xs": "9px",
        "9xl": "28px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      lg: "18px",
      "xl-4": "20.4px",
      lgi: "19px",
      "3xl": "22px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
