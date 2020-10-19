import { ChakraProvider } from "@chakra-ui/core"
import { extendTheme } from "@chakra-ui/core"
import customTheme from "../styles/theme"

// const theme = extendTheme({
//   colors: {
//     background: "#ebf"
//   },
//   fonts: {
//     body: "Nunito, sans-serif",
//     input: "Nunito, sans-serif",
//     button: "Nunito, sans-serif",
//     textarea: "Nunito, sans-serif",
//   },
//   fontSizes: {
//     lg: "18px",
//   },
//   fontWeights: {
//     normal: 600,
//   },
// })

// const customTheme = extendTheme({ theme })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
