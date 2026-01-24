/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ["Noto Sans KR", 'Malgun Gothic', 'Dotum', "sans-serif"],
            blacksans: ["Black Han Sans", "sans-serif"],
        },
        fontSize: {
            'h1': '2.5rem',      // 40px
            'h2': '1.5rem',      // 24px
            'h3': '1.125rem',    // 18px
            'fs-14': '0.875rem',  // 14px
            'fs-12': '0.75rem',  // 12px
            'fs-10': '0.625rem', // 10px
        },
        colors: {
            // 메인 컬러
            primary: '#21CDA4',
            point: '#0B3550',
            green: '#DEF2ED',

            // 상태 컬러
            warning: '#8F1111',
            caution: '#EB7E3A',

            // 텍스트 컬러
            text: {
                DEFAULT: '#303030',
                muted: '#777',
                weak: '#999',
            },

            // 레이아웃 컬러
            line: '#E2E2E2',
            bg: {
                DEFAULT: '#F7F7F7',
                hash: '#F2F2F2',
            },
            tab: {
                bg: '#E0E0E0',
                text: '#686868',
            },
        }
    },
  },
  plugins: [],
}
