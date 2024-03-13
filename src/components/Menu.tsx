import styled from 'styled-components';

import creds from '../assets/data/creds';
import { IconStripe } from '../assets/IconStripe';
import { font } from '../styles/FontSize';
import { theme } from '../styles/Theme';
import { FlexWrapper } from './FlexWrapper';


type Menu = {
  icons: "no" | "gray" | "circle";
};

export const Menu = ({ icons }: Menu) => {
  const size = icons === "gray" ? "21px" : "52px";

  const renderIconStripe = (iconType: string) => {
    return (
      icons !== "no" && (
        <IconStripe
          iconId={`${iconType}${icons === "gray" ? "" : "-circle"}`}
          height={size}
          width={size}
          fill={iconType === "address" ? theme.colors.fontShaddy : undefined}
        />
      )
    );
  };

  const { email, phone, address, googleMap } = creds;

  return (
    <>
      <FlexWrapper align="center" height="unset">
        <StyledA href={`mailto:${renderIconStripe("email")}`}>
          {renderIconStripe("email")}
          <StyledText>{email}</StyledText>
        </StyledA>
      </FlexWrapper>

      <FlexWrapper align="center" height="unset">
        <StyledA href={`tel:${renderIconStripe("phone")}`}>
          {renderIconStripe("phone")}
          <StyledText>{phone}</StyledText>
        </StyledA>
      </FlexWrapper>

      <FlexWrapper align="center" height="unset">
        <StyledA href={googleMap} target="_blank" rel="noreferrer noopener">
          {renderIconStripe("address")}
          <StyledText>{address}</StyledText>
        </StyledA>
      </FlexWrapper>
    </>
  );
};

const StyledA = styled.a`
  display: contents;
`;

const StyledText = styled.div`
  margin-left: 15px;
  font-size: ${font(14, 20)};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.01em;
  text-align: left;
`;
