import React from 'react';
import { Flex, Image, VStack, Text, Button } from '@chakra-ui/core';
import DarkLight from '../components/btn-dark-light';
import MyHead from '../components/head';
import { FiArrowRight } from 'react-icons/fi'

 
export default function index() {
  return (
    <>
      <MyHead />
      <Flex
        width='100vw'
        height='100vh'
        justifyContent='center'
        flexDirection='column'>
        {/* <DarkLight /> */}
        <Flex
          width={[
            '90%',  // < sm
            '90%',  // == sm
            '90%', // == md
            '100%' // == lg
          ]}
          maxWidth='1100px'
          height={{
            base: '70%', // < sm
            sm: '70%',
            md: '80%',
            lg: '100%'
          }}
          maxHeight="600px"
          alignSelf='center'
          background={["url(../image/Ilustra02.svg) no-repeat right center"]}
          backgroundSize={["45%"]}
        >
          <VStack
            alignItems='start'
            width='100%'
            justifyContent='space-between'
            position='relative'
          >
            <Image
              src='/image/logo.svg'
              maxWidth='240px'
              maxHeight='74px'
              width={[
                '40%',
                '40%',
                '40%',
                '100%'
              ]}
            />
            <VStack
              alignItems='start'
            >
              <Text
                maxWidth={['170px', '170px', '350px', '350px']}
                fontSize={['xl', 'xl', '5xl', '6xl']}
                fontWeight='900'
                lineHeight={['50px', '50px', '65px', '78px']}>Leve felicidade para o mundo</Text>
              <Text
                maxWidth={['170px', '170px', '350px', '350px']}
                fontSize={['18px', '18px', 'md', '24px']}
                lineHeight={['25px', '25px', '25px', '34px']}>Visite orfanatos e mude o dia de muitas crianças.</Text>
            </VStack>

            <VStack
              position='absolute'
              top='0' right='0'
              alignItems='flex-end'>
              <Text
                fontSize={['sm', 'sm', 'md', '24px']}
                lineHeight={['12px', '12px', '25px', '34px']}
                fontWeight='800'>Goiânia</Text>
              <Text
                fontSize={['sm', 'sm', 'md', '24px']}
                lineHeight={['12px', '12px', '12px', '34px']}>Goiás</Text>
            </VStack>
            <Button
              position='absolute'
              right='0'
              bottom='0'
              maxWidth='88px'
              maxHeight='88px'
              width={['10%', '10%', '12%', '100%']}
              height={['10%', '10%', '12%', '100%']}
              backgroundColor='#ffd666'
              borderRadius={['12px', '18px', '26px', '38px']}
              display='flex'
              alignItems='center'
              justifyContent='center'
              _hover={{
                background: "#96FEFF",
                color: "teal.500",
              }}
              transition='background-color 0.2s'

            ><FiArrowRight size={26} color='rgba(0, 0, 0, 0.6)' /></Button>

          </VStack>
        </Flex>
      </Flex>

    </>
  )
}
