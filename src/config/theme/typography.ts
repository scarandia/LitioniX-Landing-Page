import { TypographyOptions } from '@mui/material/styles/createTypography'

// Define the font families
export const fontFamily = [
  '"Montserrat"', // Primary font
  '"Manrope"', // Secondary font
  '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"',
].join(',')

const headingLineHeight = 1.4

const typography: TypographyOptions = {
  fontFamily,
  fontWeightLight: 400,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: '"Montserrat"', // Use Montserrat for headings
    fontSize: 34,
    lineHeight: headingLineHeight,
    fontWeight: 700,
  },
  h2: {
    fontFamily: '"Montserrat"', // Use Montserrat for headings
    fontSize: 28,
    lineHeight: headingLineHeight,
    fontWeight: 700,
  },
  h3: {
    fontFamily: '"Montserrat"', // Use Montserrat for headings
    fontSize: 24,
    lineHeight: headingLineHeight,
    fontWeight: 700,
  },
  h4: {
    fontFamily: '"Montserrat"', // Use Montserrat for headings
    fontSize: 22,
    lineHeight: headingLineHeight,
    fontWeight: 700,
  },
  h5: {
    fontFamily: '"Montserrat"', // Use Montserrat for headings
    fontSize: 17,
    lineHeight: headingLineHeight,
    fontWeight: 600,
  },
  h6: {
    fontFamily: '"Montserrat"', // Use Montserrat for headings
    fontSize: 15,
    lineHeight: headingLineHeight,
    fontWeight: 600,
  },
  body1: {
    fontFamily: '"Manrope"', // Use Manrope for body text
    fontSize: '1rem',
  },
  body2: {
    fontFamily: '"Manrope"', // Use Manrope for body text
    fontSize: '0.9rem',
  },
  subtitle1: {
    fontFamily: '"Manrope"', // Use Manrope for subtitles
    fontSize: '0.85rem',
  },
  subtitle2: {
    fontFamily: '"Manrope"', // Use Manrope for subtitles
    fontSize: '0.8rem',
  },
}

export default typography