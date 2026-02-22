import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#0f172a',
                secondary: '#1e293b',
                tertiary: '#334155',
                accent: '#38bdf8',
                'accent-secondary': '#818cf8',
                'text-primary': '#f1f5f9',
                'text-muted': '#94a3b8',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
};

export default config;
