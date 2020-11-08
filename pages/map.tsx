import { VStack, Text, Flex, Box, } from '@chakra-ui/core'
import React from 'react'
import BtnCustom from '../components/btn-custom'
import Logo from '../components/logo'
import { FiPlus } from 'react-icons/fi'
import DisplayMapClass from '../scripts/DisplayMapClass';

// import { Map, TileLayer } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
// import HEREMap, { Marker } from 'here-maps-react';



export default function map() {
   return (
      <>
         <Flex
            width='100vw'
            height='100vh'
            direction={['column', 'column', 'row', 'row']}
         >

            <Flex
               maxWidth='100vw'
               width='100%'
               flex={[3, 3, 2, 1]}
               height='100vh'
               paddingLeft={['0px', '0px', '30px', '124px']}
               justifyContent='space-around'
               alignItems={['center', 'center', 'start', 'start']}
               flexDirection='column'>

               <Logo
                  src="./image/local.svg"
                  maxHeight="72px"
                  maxWidth="64px" />

               <Box>
                  <VStack
                     width='233px'>
                     <Text
                        fontSize={['20px', '20px', '40px', '40px']}
                        lineHeight={['20px', '20px', '42px', '42px']}
                     >
                        Escolha um orfanato no mapa
                  </Text>
                     <Text
                        fontSize={['13.5px', '13.5px', '18px', '18px']}
                        lineHeight={['12.5px', '12.5px', '28px', '28px']}
                     >
                        Muitas crianças estão esperando a sua visita :)
                  </Text>
                  </VStack>
               </Box>
               <Flex
                  direction='column'
                  maxWidth='233px'
                  alignItems={['center', 'center', 'start', 'start']}
                  width={['100%', '100%', '100%', '100%']}
               >
                  <Text
                     fontSize={['18px', '18px', '18px', '18px']}
                     lineHeight={['30px', '30px', '27px', '27px']}
                     fontWeight='800'
                  >
                     Goiânia
                  </Text>
                  <Text
                     fontSize={['18px', '18px', '18px', '18px']}
                     lineHeight={['18px', '18px', '27px', '27px']}
                     fontWeight='600'
                  >
                     Goiás
                  </Text>
               </Flex>
               {//-------
               }
            </Flex>
            <Flex
               id='map'
               flex={[4, 4, 4, 3]}
               width='100%'
               height='100vh'
               position='relative'
               backgroundColor='tomato'
            >
               <DisplayMapClass />
               <BtnCustom
                  right='10'
                  bottom='10'
                  maxHeight='64px'
                  maxWidth='64px'
                  href='/'
                  iconType={FiPlus}
                  colorHover='#17d6eb'
                  backgroundColor='#15c3d6'
                  iconColor='#FFF'
               />
            </Flex>
         </Flex>
      </>
   )
}
