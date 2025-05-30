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
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        slate: {
          0: '#19191a',
          1: '#252525',
          2: '#303030',
          3: '#383838',
          4: '#474747',
        },
        ink: {
          10: '#f8f8fa',
          20: '#ededf3',
          30: '#e2e0e5',
          40: '#cccad0',
          50: '#b6b4ba',
          60: '#97959a',
          70: '#77767a',
          80: '#4e4d52',
          90: '#18171a',
        },
        magic: {
          10: '#edebff',
          20: '#cac2ff',
          30: '#a799ff',
          40: '#8875ff',
          50: '#6851ff',
          60: '#5d40ea',
          70: '#522fd4',
          80: '#4421c3',
          90: '#3512b2',
        },
        leaf: {
          10: '#e3faf3',
          20: '#baf5e3',
          30: '#90f0d3',
          40: '#48deb1',
          50: '#00cc8f',
          60: '#00aa77',
          70: '#00875f',
          80: '#007753',
          90: '#006647',
        },
        ruby: {
          10: '#ffeae5',
          20: '#ffc3b3',
          30: '#ff9b80',
          40: '#fe7c58',
          50: '#fc5c30',
          60: '#e84718',
          70: '#d43100',
          80: '#c12e02',
          90: '#ad2b03',
        },
        gold: {
          10: '#fcf4e5',
          20: '#fee5bd',
          30: '#ffd594',
          40: '#edbd72',
          50: '#dba550',
          60: '#bf8832',
          70: '#a36b14',
          80: '#97630c',
          90: '#8a5a03',
        },
        sky: {
          10: '#ebf0fe',
          20: '#afc4ff',
          30: '#7398ff',
          40: '#5482fb',
          50: '#346bf7',
          60: '#295ee7',
          70: '#1e50d6',
          80: '#1344c7',
          90: '#0737b8',
        },
        chalk: '#ffffff',
        paper: '#ffffff',
        "link-blue": "#3498db",
        "link-blue-hover": "#0468ab",
        "verified-contract": "#2b50aa",
        "verified-contract-hover": "#26007b",
        "source-line-numbers": "#738a9486",
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
