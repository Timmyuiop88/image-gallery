
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// Supports weights 200-900
import '@fontsource-variable/nunito';
const theme = extendTheme({
  fonts: {
      heading: `'Nunito Variable', sans-serif`,
      body: `'Nunito Variable', sans-serif`,
    },
  
  

})
export default function ThemeProvider({ children }) {
    
  return (

    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>

  )
}