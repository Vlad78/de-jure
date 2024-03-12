import styled from "styled-components";

import creds from "../assets/data/creds";
import { IconStripe } from "../assets/IconStripe";
import { font } from "../styles/FontSize";
import { theme } from "../styles/Theme";
import { FlexWrapper } from "./FlexWrapper";

type Menu = {
  icons: "no" | "gray" | "circle";
};

export const Menu = ({ icons }: Menu) => {
  const size = icons === "gray" ? "21px" : "52px";
  return (
    <>
      <FlexWrapper align="center" height="unset">
        {icons === "no" ? (
          ""
        ) : (
          <IconStripe
            iconId={`email${icons === "gray" ? "" : "-circle"}`}
            height={size}
            width={size}
          />
        )}
        <StyledText>{creds.email}</StyledText>
      </FlexWrapper>
      <FlexWrapper align="center" height="unset">
        {icons === "no" ? (
          ""
        ) : (
          <IconStripe
            iconId={`phone${icons === "gray" ? "" : "-circle"}`}
            height={size}
            width={size}
          />
        )}
        <StyledText>{creds.phone}</StyledText>
      </FlexWrapper>
      <FlexWrapper align="center" height="unset">
        {icons === "no" ? (
          ""
        ) : (
          <IconStripe
            iconId={`address${icons === "gray" ? "" : "-circle"}`}
            height={size}
            width={size}
            fill={theme.colors.fontShaddy}
          />
        )}
        <StyledText>{creds.address}</StyledText>
      </FlexWrapper>
    </>
  );
};

const StyledText = styled.div`
  margin-left: 15px;
  font-size: ${font(14, 20)};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 1%;
  text-align: left;
`;
