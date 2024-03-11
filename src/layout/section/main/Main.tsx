import Image from "next/image";
import React from "react";
import styled from "styled-components";

import { IconStripe } from "../../../assets/IconStripe";
import mainImage from "../../../assets/imgs/main.png";
import { Container } from "../../../components/Container";
import { CustomButton } from "../../../components/CustomButton";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain id="Main">
      <Container>
        <StyledBackground>
          <IconStripeWrapper>
            <IconStripe iconId="BGLines" width="1661.44px" height="1932px" transform="scale(1.8)" />
          </IconStripeWrapper>
        </StyledBackground>
        <FlexWrapper
          z={10}
          position="absolute"
          gap="44px"
          justify="space-between"
          margin="30px 0 0 0"
        >
          <StyledInfo>
            <IconStripe iconId="logo" width="74px" />
            {/* <StyledHero>Finding Out the Truth, Helping, Arguing and Winning</StyledHero> */}
            <StyledHero>Finding Out the Truth, Arguing and Winning</StyledHero>
            <Description>You trusted lawer in Poland</Description>
            {/* <CustomButton text="readMore" /> */}
          </StyledInfo>
          <Image
            alt="Main image"
            width={833}
            src={mainImage}
            quality={100}
            style={{ objectPosition: "60px 0" }}
          />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 715px;
  height: 100vh;
  max-height: 890px;
  overflow: hidden;
`;

const StyledInfo = styled.div`
  margin-top: 102px;
  flex-basis: 548px;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

const StyledHero = styled.h2`
  margin-top: 45px;
`;

const Description = styled.h1`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 136.15%;
`;

const StyledBackground = styled.div`
  min-height: inherit;
  height: inherit;
  max-height: inherit;
  position: absolute;
  inset: 0 0 0 0;
  background-color: ${theme.colors.colorPrimeLight};
  border-radius: 0px 400px 0px 300px;
  overflow: hidden;
`;

const IconStripeWrapper = styled.div`
  position: absolute;
  inset: 0 0 0 0;

  svg {
    position: absolute;
    opacity: 0.08;
    top: -340.16px;
    left: 170px;
  }
`;
