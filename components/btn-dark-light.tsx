import { useColorMode, Button, Box, Flex } from "@chakra-ui/core"
import React from "react"

export default function DarkLight() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button
            right='7'
            top='7'
            position='fixed'
            width='100px'
            height='40px'
            onClick={toggleColorMode}
            variant='ghost'
            _pressed={{
                color: "grey.900",

            }}
            _visited={{
                border: 'none',
                color: "grey.900",

            }}
            _hover={{
                color: "grey.900",
            }}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
    )
}