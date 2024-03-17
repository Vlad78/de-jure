import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styled from 'styled-components';

import { IconStripe } from '../../../assets/IconStripe';
import img from '../../../assets/imgs/about.jpeg';
import { Container } from '../../../components/Container';
// import { CustomButton } from '../../../components/CustomButton';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconStripeWrapper } from '../../../components/IconWrapper';
import { TitleSection } from '../../../components/TitleSection';
import { font } from '../../../styles/FontSize';
import { theme } from '../../../styles/Theme';
import { AboutContacts } from './AboutContacts';


export const AboutUs = () => {
  const t = useTranslations("aboutUs");
  return (
    <StyledAboutUs id={t("title")}>
      <Container>
        <IconStripeWrapper left="457px" top="-62px">
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <FlexWrapper gap="6%" align="center" position="relative" z={1}>
          <FlexWrapper direction="column">
            <TitleSection>{t("title")}</TitleSection>
            <StyledMoto>{t("moto")}</StyledMoto>
            <AboutContacts />
          </FlexWrapper>
          <ImageWrapper>
            <Image alt="About us" src={img} />
          </ImageWrapper>
        </FlexWrapper>
      </Container>
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled.section`
  margin-top: 348px;
  min-height: 270px;

  @media ${theme.media.desktop} {
    margin-top: 200px;
  }
  @media ${theme.media.tablet} {
    margin-top: 150px;
  }
  @media ${theme.media.mobile} {
    margin-top: 100px;
  }

  ${FlexWrapper} {
    ${FlexWrapper} {
      flex-basis: 280px;
      flex-grow: 1;
      text-align: left;
    }
  }

  ${TitleSection} {
    font-size: ${font(25, 50)};
    text-align: left;
    margin: 0 0 33px 0;
  }

  @media ${theme.media.mobile} {
    ${TitleSection} {
      margin: 1em 0;
      text-align: center;
      font-size: ${font(40, 64)};
    }
  }
`;

const StyledMoto = styled.p`
  font-size: ${font(16, 22)};
  letter-spacing: 0.02em;

  @media ${theme.media.mobile} {
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  flex-basis: 51%;
  flex-grow: 1;
  max-height: 703px;
  min-width: 300px;
  overflow: hidden;
  background: ${theme.colors.bgPlug};
  border-radius: 0px 326.5px 0px 123px;

  img {
    object-fit: contain;
    height: auto;
  }

  @media ${theme.media.desktop} {
    max-height: 469px;
    border-radius: 0px 250px 0px 120px;
  }
  @media ${theme.media.tablet} {
    border-radius: 0px 170px 0px 100px;
  }
  @media screen and (max-width: 740px) {
    display: none;
  }
`;
