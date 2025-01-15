import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0) translateX(0)' },
  				'25%': { transform: 'translateY(-20px) translateX(10px)' },
  				'50%': { transform: 'translateY(0) translateX(20px)' },
  				'75%': { transform: 'translateY(20px) translateX(10px)' },
  			},
  			'drive-across': {
  				'0%': { transform: 'translateX(0)' },
  				'100%': { transform: 'translateX(1200px)' }
  			},
  			'float-box': {
  				'0%, 100%': { transform: 'translateY(0) rotate(45deg)' },
  				'50%': { transform: 'translateY(-20px) rotate(45deg)' }
  			},
  			'dash': {
  				'0%': { strokeDashoffset: '0px' },
  				'100%': { strokeDashoffset: '100px' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'spin-slow': 'spin 20s linear infinite',
  			'spin-slower': 'spin 30s linear infinite',
  			'float-slow': 'float 15s ease-in-out infinite',
  			'float-slow-delay': 'float 15s ease-in-out infinite 2s',
  			'drive-across': 'drive-across 15s linear infinite',
  			'drive-across-reverse': 'drive-across 15s linear infinite -7s',
  			'float-box': 'float-box 4s ease-in-out infinite',
  			'float-box-delay': 'float-box 4s ease-in-out infinite -2s',
  			'dash': 'dash 20s linear infinite',
  			'dash-reverse': 'dash 20s linear infinite reverse',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
