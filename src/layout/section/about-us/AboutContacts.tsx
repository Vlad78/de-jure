import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import creds from '../../../assets/data/creds';
import { IconStripe } from '../../../assets/IconStripe';
import { font } from '../../../styles/FontSize';
import { theme } from '../../../styles/Theme';


export const AboutContacts = () => {
  const t = useTranslations("system");
  return (
    <StyledAboutContacts href={`tel:${creds.phone}`}>
      <IconStripe iconId="callIcon" />
      <div>{creds.phone}</div>
      <div>{t("callCondition")}</div>
    </StyledAboutContacts>
  );
};

const StyledAboutContacts = styled.a`
  margin-top: 45px;
  display: grid;
  grid-template-areas:
    "i t"
    "i p";
  grid-template-columns: min-content;
  color: ${theme.colors.fontShaddy};

  &:hover {
    text-decoration: none;
  }

  svg {
    grid-area: i;
    margin-right: 15px;
    border-radius: 50%;
    box-shadow: 0 0 0 0 ${theme.colors.colorPrimeLight}80;
    animation: pulse 1.5s infinite;

    &:hover {
      animation: none;
      transform: scale(1.02);
      transition: 0.2s;
    }
  }

  div:nth-of-type(1) {
    grid-area: t;
    align-self: end;
    font-size: ${font(16, 24)};
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.01em;
  }

  div:nth-of-type(2) {
    grid-area: p;
    align-self: start;
    font-size: ${font(14, 22)};
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.01em;
  }

  @keyframes pulse {
    0% {
    }
    70% {
      box-shadow: 0 0 0 10px ${theme.colors.colorPrimeLight}00;
    }
    100% {
      box-shadow: 0 0 0 0 ${theme.colors.colorPrimeLight}00;
    }
  }
`;
