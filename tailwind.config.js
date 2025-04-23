module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}", // 加入 Flowbite 路徑
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
