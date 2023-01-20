type themeOptions = {
  [key: string]: string
}

interface ITheme {
  light: themeOptions
  dark: themeOptions
  breakpoints: themeOptions
}

export const theme: ITheme = {
  light: {
    header: '#373b53',
    background: '#f8f8fb',
    heading: '#0C0E16',
    primary: '#7c5dfa',
    lightViolet: '#9277ff',
    fiord: '#494E6E',
    baliHai: '#888EB0',
    selago: '#dfe3fa',
    mirage: '#1E2139',
    white: '#fff',
    shipCove: '#7E88C3',
    coral: '#EC5757',
    steel: '#858bb2',
    mint: '#33D69F',
    peach: '#FF8F00',
    sky: '#F9FAFE',
  },
  dark: {},
  breakpoints: {
    tablet: '768px',
    mobile: '640px',
    desktop: '1024px',
    desktopL: '1440px',
    desktopXL: '1920px',
  },
}
