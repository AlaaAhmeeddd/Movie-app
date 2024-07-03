"use client";
import  { ThemeProvider } from "next-themes"

export default function Provider({children}: {children: React.ReactNode}) {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <div className="text-gray-700 dark:text-white dark:bg-gray-700 min-h-screen 
            transition-colors duration-300 select-none">
                {children}  
            </div>
        </ThemeProvider>
    )
}
