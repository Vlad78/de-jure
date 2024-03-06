import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import mainImage from '../../../assets/imgs/main.png';
import { ButtonReadMore } from '../../../components/ButtonReadMore';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconStripe } from '../../../components/icons/IconStripe';
import { theme } from '../../../styles/Theme';


export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <StyledBackground />
        <IconStripeWrapper>
          <IconStripe iconId="BGLines" width="1661.44px" height="1932px" />
        </IconStripeWrapper>
        <FlexWrapper z={10} position="relative">
          <StyledInfo>
            <IconStripe iconId="logo" width="100px" />
            <StyledHero>Finding Out the Truth, Helping, Arguing and Winning</StyledHero>
            <Description>You trusted lawer in Poland</Description>
            <ButtonReadMore />
          </StyledInfo>
          <Image alt="Main image" src={mainImage} />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 900px;
`;

const StyledBackground = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  background-color: ${theme.colors.colorPrimeLight};
  border-radius: 0px 400px 0px 300px;
`;

const IconStripeWrapper = styled.div`
  position: absolute;
  inset: 0 0 0 0;

  svg {
    position: absolute;
    opacity: 0.6;
    top: -340.16px;
    left: 78.75px;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHero = styled.h2``;

const Description = styled.h1``;
