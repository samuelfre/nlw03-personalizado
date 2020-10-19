import { extendTheme } from "@chakra-ui/core"


const fonts = { body: `'Nunito', sans-serif` }
const fontSizes = {
  xs: "7.4px",
  sm: "14.8px",
  md: "22.2px",
  lg: "29.6px",
  xl: "37px",
  "2xl": "44.4px",
  "3xl": "51.8px",
  "4xl": "59.2px", //30em
  "5xl": "66.6px",
  "6xl": "76px",
}
const breakpoints = {sm: "20em", md: "53em", lg: "86em", xl: "120em"}

const styles = {
  global: (props: any) => (
    {
      body: {
        bg: props.colorMode === "dark" ? "gray.600" : "linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%)",
        color: "white",
      },
      "body, input, button, textarea": {
        fontWeight: "600",
      },

    })

}
const customTheme = extendTheme({ fonts, styles, fontSizes, breakpoints })

export default customTheme