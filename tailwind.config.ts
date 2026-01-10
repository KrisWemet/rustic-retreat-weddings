import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				cream: {
					DEFAULT: "hsl(var(--cream))",
					light: "hsl(var(--cream-light))",
					dark: "hsl(var(--cream-dark))",
				},
				terracotta: {
					DEFAULT: "hsl(var(--terracotta))",
					light: "hsl(var(--terracotta-light))",
					dark: "hsl(var(--terracotta-dark))",
				},
				sage: {
					DEFAULT: "hsl(var(--sage))",
					light: "hsl(var(--sage-light))",
				},
				warmbrown: {
					DEFAULT: "hsl(var(--warm-brown))",
					light: "hsl(var(--warm-brown-light))",
					dark: "hsl(var(--warm-brown-dark))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
					light: "hsl(var(--warm-brown-light))",
					dark: "hsl(var(--warm-brown-dark))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
					light: "hsl(var(--terracotta-light))",
					dark: "hsl(var(--terracotta-dark))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
					light: "hsl(var(--sage-light))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				warmgray: "hsl(var(--warm-gray))",
				rosegold: {
					DEFAULT: "hsl(var(--rosegold))",
					light: "hsl(var(--rosegold-light))",
					dark: "hsl(var(--rosegold-dark))",
				},
			},
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "hero-fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "hero-fade-in-delayed": {
          "0%, 37.5%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "page-enter": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "soft-reveal": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "hero-fade-in": "hero-fade-in 0.8s ease-out forwards",
        "hero-fade-in-delayed": "hero-fade-in-delayed 1.1s ease-out forwards",
        "page-enter": "page-enter 0.4s ease-out forwards",
        "soft-reveal": "soft-reveal 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
