"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const handleThemeChange = React.useCallback((newTheme: string) => {
    setTheme(newTheme)
  }, [setTheme])

  const themeOptions = React.useMemo(() => [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" }, 
    { value: "system", label: "System" }
  ], [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="p-4.5 cursor-pointer dark:bg-background transition-colors"
          aria-label="Toggle theme"
        >
          <Sun 
            className="h-[1.2rem] w-[1.2rem] scale-90 md:scale-110 rotate-0 transition-all dark:scale-0 dark:-rotate-90" 
            aria-hidden="true"
          />
          <Moon 
            className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" 
            aria-hidden="true"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="z-101 min-w-[120px]"
        role="menu"
        aria-label="Theme selection"
      >
        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleThemeChange(option.value)}
            className="cursor-pointer transition-colors"
            role="menuitemradio"
            aria-checked={theme === option.value}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}