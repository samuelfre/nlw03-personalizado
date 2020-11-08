import { Button } from '@chakra-ui/core'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface IButton{
   maxWidth: string
   maxHeight: string
   right: string
   bottom: string
   iconType: IconType
   href: string
   colorHover: string
   backgroundColor: string
   iconColor: string
}

export default function BtnCustom(props: IButton) {
   return (
      <Link href={props.href}>
         <Button
            position='absolute'
            right={props.right}
            bottom={props.bottom}
            maxWidth={props.maxWidth}
            maxHeight={props.maxHeight}
            width={['11%', '11%', '12%', '100%']}
            height={['11%', '11%', '12%', '100%']}
            backgroundColor={props.backgroundColor}
            borderRadius={['8px', '8px', '18px', '28px']}
            display='flex'
            alignItems='center'
            justifyContent='center'
            zIndex='1'
            _hover={{
               background: props.colorHover,
            }}
            transition='background-color 0.2s'>
            <props.iconType
             size={26}
             color={props.iconColor}/>
         </Button>
      </Link>
   )
}
