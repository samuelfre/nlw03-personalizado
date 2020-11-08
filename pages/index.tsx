import React from 'react';
import { Flex, VStack, Text } from '@chakra-ui/core';
import DarkLight from '../components/btn-dark-light';
import MyHead from '../components/head';
import Logo from '../components/logo';
import { FiArrowRight } from 'react-icons/fi'
import BtnCustom from '../components/btn-custom';

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
            base: '70%',   // < sm
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
            <Logo src="/image/logo.svg" maxWidth="240px" maxHeight="74px" />
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
            <BtnCustom
              maxWidth='88px'
              maxHeight='88px'
              right='0'
              bottom='0'
              iconType={FiArrowRight}
              href='/map'
              colorHover='#96FEFF'
              backgroundColor='#ffd666'
              iconColor='rgba(0, 0, 0, 0.6)'
            />

          </VStack>
        </Flex>
      </Flex>

    </>
  )
}
