function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        backgroundSecondary: 'var(--color-background-secondary)',
        backgroundTertiary: 'var(--color-background-tertiary)',
        backgroundQuaternary: 'var(--color-background-quaternary)',
        text: 'var(--color-text)',
        textSecondary: 'var(--color-text-secondary)',
        textTertiary: 'var(--color-text-tertiary)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['Inter', 'ProximaNova', 'system-ui', '-apple-system', 'sans-serif'],
        inter: ['Inter', 'ProximaNova', 'system-ui', '-apple-system', 'sans-serif'],
        title: ["Space Grotesk"],
        address: ["Roboto Mono"],
        hash: ["Roboto Mono"],
        data: ["Roboto Mono"],
        balance: ["Fira Code"],
        blocknum: ["Roboto"],
        code: ["Fira Code"],
      },
      borderColor: {
        skin: {
          from: withOpacity("--color-from-border"),
        },
      },
      textColor: {
        skin: {
          button: withOpacity("--color-button-text"),
          from: withOpacity("--color-from-text"),
        },
        primary: 'var(--color-text-primary)',
        'primary-dark': 'var(--color-text-primary-dark)',
        secondary: 'var(--color-text-secondary)',
        'secondary-dark': 'var(--color-text-secondary-dark)',
        tertiary: 'var(--color-text-tertiary)',
        'tertiary-dark': 'var(--color-text-tertiary-dark)',
        quaternary: 'var(--color-text-quaternary)',
        'quaternary-dark': 'var(--color-text-quaternary-dark)',
        error: 'var(--color-text-error)',
        'error-dark': 'var(--color-text-error-dark)',
      },
      backgroundColor: {
        skin: {
          "button-fill": withOpacity("--color-button-fill"),
          "button-hover-fill": withOpacity("--color-button-hover-fill"),
          from: withOpacity("--color-from-fill"),
          to: withOpacity("--color-to-fill"),
          "table-hover": withOpacity("--color-table-row-hover"),
        },
      },
    },
  },
  plugins: [],
};
