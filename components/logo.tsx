import React from 'react'
import { Image } from '@chakra-ui/core';

interface ILogo {
    src: string
    maxWidth: string
    maxHeight: string
}

export default function Logo(props: ILogo) {
    return (
        <Image
            src={props.src}
            maxWidth={props.maxWidth}
            maxHeight={props.maxHeight}
            width={[
                '40%',
                '40%',
                '40%',
                '100%'
            ]}
        />
    )
}
