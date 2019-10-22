import React from 'react';
import { Flex } from 'molekule';
import styled from 'styled-components';

const Image = styled.img`
  width: auto;
  max-height: 250;
  max-width: 100%;

  @media screen and (min-width: 800px) {
    max-width: 350px;
    max-height: 300px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 500px;
    max-height: 350px;
  }
`;

export default ({ src, imageProps, ...props }) => (
  <Flex maxWidth={500} maxHeight={350} justifyContent="center" alignItems="center" mx="auto" height="100%" {...props}>
    <Image src={src} {...imageProps}/>
  </Flex>
);
