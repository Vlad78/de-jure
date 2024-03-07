import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { theme } from '../styles/Theme';


export const ButtonReadMore = () => {
  const t = useTranslations("system");
  return <StyledButton>{t("readMore")}</StyledButton>;
};

const StyledButton = styled.button`
  width: 252px;
  padding: 14px;
  font-size: 28px;
  font-weight: 700;
  line-height: 136.15%;
  text-align: center;
  border-radius: 10px;
  background-color: ${theme.colors.colorPrimeMedium};
`;
