import { useTranslations } from "next-intl";
import { MouseEvent } from "react";
import styled, { css } from "styled-components";

import { font } from "../styles/FontSize";
import { theme } from "../styles/Theme";

type Button = {
  option?: "transparent";
  text: "readMore" | "send" | "build a route" | "loading";
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const CustomButton = ({ option, text, onClick, disabled }: Button) => {
  const t = useTranslations("system");
  return (
    <StyledButton option={option} onClick={onClick} disabled={disabled}>
      {t(text)}
    </StyledButton>
  );
};

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (props) => !["option", "text"].includes(props),
})<Omit<Button, "text">>`
  width: 252px;
  padding: 14px;
  font-size: ${font(14, 28)};
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
      @media ${theme.media.desktop} {
        border-width: 2px;
      }
    `};

  @media ${theme.media.desktop} {
    width: 196px;
  }
  @media ${theme.media.desktop} {
    width: 185px;
  }
  @media ${theme.media.mobile} {
    font-size: ${font(20, 28)};
  }
`;
