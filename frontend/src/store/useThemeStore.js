import { create } from 'zustand'

export const useThemeStore = create((set) => ({
   theme: localStorage.getItem("Vida-Theme") || "coffee",
   setTheme: (theme) => {
    localStorage.setItem("Vida-Theme", theme); 
    set({theme})
},

}))
