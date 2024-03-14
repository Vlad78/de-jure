import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { IconStripe } from '../../../assets/IconStripe';
import mainImage from '../../../assets/imgs/main.png';
import { Container } from '../../../components/Container';
import { CustomButton } from '../../../components/CustomButton';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { font } from '../../../styles/FontSize';
import { theme } from '../../../styles/Theme';


export const Main = () => {
  const t = useTranslations("main");

  const imageStyle = {
    flexGrow: 1,
    flexBasis: "60%",
    maxWidth: "60%",
    objectFit: "cover",
    objectPosition: "left",
  } as React.CSSProperties;

  return (
    <StyledMain id="Main">
      <Container>
        <StyledBackground>
          <IconStripeWrapper>
            <IconStripe iconId="BGLines" width="1661.44px" height="1932px" transform="scale(1.8)" />
          </IconStripeWrapper>
        </StyledBackground>
        <FlexWrapper z={10} position="absolute" justify="space-between" margin="30px 0 0 0">
          <StyledInfo>
            <IconStripe iconId="logo" width="74px" />
            {/* <StyledHero>Finding Out the Truth, Helping, Arguing and Winning</StyledHero> */}
            <StyledHero>{t("hero")}</StyledHero>
            <Description>{t("description")}</Description>
            {/* <CustomButton text="readMore" /> */}
          </StyledInfo>
          <Image alt="Main image" width={833} src={mainImage} quality={100} className="main-img" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 600px;
  height: 100vh;
  max-height: 890px;
  overflow: hidden;

  .main-img {
    flex-grow: 1;
    flex-basis: 60%;
    max-width: 60%;
    object-fit: cover;
    object-position: left;

    @media ${theme.media.tablet} {
      max-width: 53%;
      flex-basis: 53%;
    }
  }
`;

const StyledInfo = styled.div`
  margin-top: 102px;
  flex-basis: 40%;
  flex-grow: 1;

  @media ${theme.media.tablet} {
    margin-top: 23px;
  }

  display: flex;
  flex-direction: column;
`;

const StyledHero = styled.h2`
  margin-top: 45px;
  line-height: 136.15%;
`;

const Description = styled.h1`
  margin-top: 20px;
  font-size: ${font(14, 24)};
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

  @media ${theme.media.tablet} {
    border-radius: 0px 200px 0px 100px;
  }
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
