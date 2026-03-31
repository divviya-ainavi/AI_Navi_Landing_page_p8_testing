"use client";

import * as React from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface ThemeSwitcherProps {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export function ThemeSwitcher({ 
  className, 
  variant = "ghost", 
  size = "icon" 
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant={variant}
        size={size}
        className={cn("h-9 w-9", className)}
        disabled
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const getCurrentIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      case "black-white":
        return <Palette className="h-4 w-4" />;
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  const themeOptions = [
    {
      value: "light",
      label: "Light",
      icon: <Sun className="mr-2 h-4 w-4" />,
      description: "Bright and clean interface"
    },
    {
      value: "dark",
      label: "Dark",
      icon: <Moon className="mr-2 h-4 w-4" />,
      description: "Dark background with light text"
    },
    {
      value: "black-white",
      label: "Black & White",
      icon: <Palette className="mr-2 h-4 w-4" />,
      description: "High contrast black and white"
    }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={cn("h-9 w-9", className)}
          aria-label="Toggle theme"
        >
          {getCurrentIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={cn(
              "flex flex-col items-start gap-1 p-3 cursor-pointer",
              theme === option.value && "bg-accent"
            )}
          >
            <div className="flex items-center">
              {option.icon}
              <span className="font-medium">{option.label}</span>
              {theme === option.value && (
                <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
              )}
            </div>
            <span className="text-xs text-muted-foreground">
              {option.description}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Alternative compact version for mobile or space-constrained areas
export function CompactThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const cycleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("black-white");
        break;
      case "black-white":
        setTheme("light");
        break;
      default:
        setTheme("dark");
    }
  };

  const getCurrentIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      case "black-white":
        return <Palette className="h-4 w-4" />;
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className={cn("h-9 w-9", className)}
      aria-label={`Switch to next theme. Current: ${theme}`}
    >
      {getCurrentIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

// Theme indicator for showing current theme in settings
export function ThemeIndicator() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-4 w-16 bg-muted animate-pulse rounded" />;
  }

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "black-white":
        return "Black & White";
      default:
        return "System";
    }
  };

  return (
    <span className="text-sm text-muted-foreground">
      Current theme: <span className="font-medium">{getThemeLabel()}</span>
    </span>
  );
}