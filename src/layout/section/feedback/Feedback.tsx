"use client";

import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import creds from '../../../assets/data/creds';
import { IconStripe } from '../../../assets/IconStripe';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconStripeWrapper } from '../../../components/IconWrapper';
import { Menu } from '../../../components/Menu';
import { TitleSection } from '../../../components/TitleSection';
import { font } from '../../../styles/FontSize';
import { theme } from '../../../styles/Theme';
import { Form } from './Form';


export const Feedback = () => {
  const t = useTranslations("feedback");

  return (
    <StyledFeedback id="Feedback">
      <Container>
        <IconStripeWrapper top="490px" left="404px">
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <TitleSection>{t("title")}</TitleSection>

        <Wrapper>
          <StyledCreds>
            <FlexWrapper direction="column" justify="space-between" gap="5%" align="start">
              <Menu icons="circle" />
            </FlexWrapper>
            <FlexWrapper margin="17px 0 0 0" height="unset" gap="35px">
              <a href={creds.fb}>
                <IconStripe iconId="fb" height="22px" width="30px" />
              </a>
              <a href={creds.x}>
                <IconStripe iconId="x" height="22px" width="30px" />
              </a>
              <a href={creds.insta}>
                <IconStripe iconId="insta" height="22px" width="30px" />
              </a>
            </FlexWrapper>
          </StyledCreds>

          <Form />
        </Wrapper>
      </Container>
    </StyledFeedback>
  );
};

const StyledFeedback = styled.section`
  margin-top: 237px;
  min-height: 691px;

  @media ${theme.media.desktop} {
    margin-top: 150px;
  }
  @media ${theme.media.mobile} {
    margin-top: 100px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5%;
  align-items: start;
  position: relative;
  z-index: 1;
  flex-wrap: nowrap;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    gap: 100px;
  }
`;

const StyledCreds = styled.div`
  flex-basis: 38%;
  display: flex;
  flex-direction: column;
  min-height: 437px;
  min-width: 350px;
  padding: 76px 32px;
  background-color: ${theme.colors.colorPrimeLight};
  border-radius: 50px;
  gap: 30px;

  & > ${FlexWrapper}:nth-child(1) {
    flex-grow: 1;
  }

  svg {
    flex-shrink: 0;
  }

  @media screen and (min-width: 577px) and (max-width: 900px) {
    flex-basis: 100%;
    flex-direction: row;
    min-height: unset;
    padding: 32px 58px;
    font-size: ${font(14, 20)};
    justify-content: space-between;

    & > ${FlexWrapper}:nth-child(1) {
      flex-grow: 1;
      gap: 40px;
    }

    & > ${FlexWrapper}:nth-child(2) {
      flex-direction: column;
      justify-content: space-between;
      gap: 40px;
      margin: 16px 0;
    }
  }

  @media ${theme.media.mobile} {
    min-height: 373px;
    min-width: 100%;
    padding: 35px 20px;

    & > ${FlexWrapper}:nth-child(1) {
      flex-grow: 1;
      gap: 35px;
    }

    & > ${FlexWrapper}:nth-child(2) {
      justify-content: space-evenly;
      margin-top: 10px;
    }
  }
`;
