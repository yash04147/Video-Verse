import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p="16">
      <form action="">
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading alignSelf={'center'}>𝒱𝒾𝒹𝑒𝑜 𝒱𝑒𝓇𝓈𝑒</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder={'name'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Signed up?{' '}
            <Button variant={'link'}>
              <Link to={'/login'}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
