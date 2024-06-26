import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

import { IconStripe } from "../../../assets/IconStripe";
import mainImage from "../../../assets/imgs/main.png";
import { Container } from "../../../components/Container";
import { CustomButton } from "../../../components/CustomButton";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../styles/FontSize";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  const t = useTranslations("main");

  return (
    <StyledMain id="Main">
      <Container>
        <StyledBackground>
          <IconStripeWrapper>
            <IconStripe iconId="BGLines" width="1661.44px" height="1932px" />
          </IconStripeWrapper>
        </StyledBackground>
        <FlexWrapper z={10} position="absolute" justify="space-between" margin="30px 0 0 0">
          <StyledInfo>
            <IconStripe iconId="logo" width="74px" />
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
    flex-basis: 50%;
    max-width: 50%;
    object-fit: cover;
    object-position: left;

    @media ${theme.media.tablet} {
      transform: translateX(-30px);
      overflow: visible;
    }
    @media screen and (max-width: 762px) {
      object-position: -65px;
    }
    @media ${theme.media.mobile} {
      display: none;
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

  @media ${theme.media.mobile} {
    margin-top: 100px;
    align-items: center;
    gap: 30px;

    svg {
      height: 200px;
      width: 120px;
    }
  }
`;

const StyledHero = styled.h2`
  margin-top: 45px;
  line-height: 136.15%;

  @media ${theme.media.tablet} {
    font-size: ${font(28, 50)};
  }
  @media ${theme.media.mobile} {
    margin-top: unset;
    text-align: center;
    font-size: ${font(36, 110)};
  }
`;

const Description = styled.h1`
  margin-top: 20px;
  font-size: ${font(16, 24)};
  font-weight: 700;
  line-height: 136.15%;
  hyphens: auto;

  @media ${theme.media.tablet} {
    width: 90%;
    font-size: ${font(16, 22)};
  }

  @media ${theme.media.mobile} {
    margin-top: unset;
    text-align: center;
    font-size: ${font(16, 64)};
  }
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

  @media ${theme.media.mobile} {
    border-radius: unset;
  }
`;

const IconStripeWrapper = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  transform: scale(1.8);

  svg {
    position: absolute;
    opacity: 0.1;
    top: -340.16px;
    left: 120px;

    @media ${theme.media.tablet} {
      left: -360px;
    }
    @media ${theme.media.mobile} {
      top: -630px;
    }
  }
`;
