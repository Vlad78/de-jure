import { useTranslations } from 'next-intl';
import styled, { css } from 'styled-components';

import { theme } from '../styles/Theme';


type Button = {
  option?: "transparent";
  text: "readMore" | "send";
};

export const CustomButton = ({ option, text }: Button) => {
  const t = useTranslations("system");
  return (
    <>
      <StyledButton option={option}>{t(text)}</StyledButton>
    </>
  );
};

const StyledButton = styled.button<Omit<Button, "text">>`
  width: 252px;
  padding: 14px;
  font-size: 28px;
  font-weight: 700;
  line-height: 136.15%;
  text-align: center;
  border-radius: 10px;
  background-color: ${theme.colors.colorPrimeMedium};

  ${(props) =>
    props.option === "transparent" &&
    css`
      background-color: transparent;
      border: 3px solid ${theme.colors.colorPrimeMedium};
      color: ${theme.colors.colorPrimeMedium};
      &:hover {
        background-color: ${theme.colors.colorPrimeMedium};
        color: ${theme.colors.font};
      }
    `};
`;
