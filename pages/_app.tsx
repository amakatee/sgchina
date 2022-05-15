import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material'


export const theme = createTheme({
  palette: {
    secondary: {
      main: '#647dee',
      
    },
   
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>
}

export default MyApp
