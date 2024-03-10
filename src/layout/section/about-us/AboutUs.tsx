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
import { theme } from '../../../styles/Theme';
import { AboutContacts } from './AboutContacts';


export const AboutUs = () => {
  const t = useTranslations("aboutUs");
  return (
    <StyledAboutUs id={t("title")}>
      <Container>
        <IconStripeWrapper>
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <FlexWrapper>
          <FlexWrapper direction="column">
            <TitleSection>{t("title")}</TitleSection>
            <StyledMoto>{t("moto")}</StyledMoto>
            <AboutContacts />
            {/* <CustomButton text="readMore" /> */}
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
  min-height: 933px;
`;

const StyledMoto = styled.p``;

const ImageWrapper = styled.div`
  max-height: 703px;
  overflow: hidden;
  background: ${theme.colors.bgPlug};
  border-radius: 326.5px 0px 123px 0px;

  img {
    object-fit: cover;
    object-position: -45px -150px;
  }
`;
