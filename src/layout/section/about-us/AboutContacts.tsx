import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { IconStripe } from '../../../assets/IconStripe';


export const AboutContacts = () => {
  const t = useTranslations("system");
  return (
    <StyledAboutContacts href={`tel:${t("phoneNumber")}`}>
      <IconStripe iconId="callIcon" />
      <div>{t("phoneNumber")}</div>
      <div>{t("callCondition")}</div>
    </StyledAboutContacts>
  );
};

const StyledAboutContacts = styled.a`
  display: grid;
  grid-template-areas:
    "i t"
    "i p";

  &:hover {
    text-decoration: none;
  }

  svg {
    grid-area: i;
  }

  div:nth-child(1) {
    grid-area: t;
  }

  div:nth-child(2) {
    grid-area: p;
  }
`;
