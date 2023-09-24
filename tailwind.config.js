/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#FF444A",
        
"secondary": "#0052FF26",
        
"accent": "#ea469b",
        
"neutral": "#39293d",
        
"base-100": "#fcfcfd",
        
"info": "#abd9e3",
        
"success": "#29c7aa",
        
"warning": "#cd820a",
        
"error": "#ed4a78",
        },
      },
    ],
  },
 
  
  plugins: [require("daisyui")],
}