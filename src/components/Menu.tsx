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
    <StyledMenu>
      <FlexWrapper align="center" height="unset">
        <StyledLink href={`mailto:${renderIconStripe("email")}`}>
          {renderIconStripe("email")}
          <StyledText noForward={icons === "gray"}>{email}</StyledText>
        </StyledLink>
      </FlexWrapper>

      <FlexWrapper align="center" height="unset">
        <StyledLink href={`tel:${renderIconStripe("phone")}`}>
          {renderIconStripe("phone")}
          <StyledText noForward={icons === "gray"}>{phone}</StyledText>
        </StyledLink>
      </FlexWrapper>

      <FlexWrapper align="center" height="unset">
        <StyledLink href={googleMap} target="_blank" rel="noreferrer noopener">
          {renderIconStripe("address")}
          <StyledText noForward={icons === "gray"}>{address}</StyledText>
        </StyledLink>
      </FlexWrapper>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  display: contents;
`;

const StyledLink = styled.a`
  display: contents;

  svg {
    flex-shrink: 0;
  }
`;

const StyledText = styled.div<{ noForward: boolean }>`
  margin-left: 15px;
  font-size: ${font(14, 20)};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.01em;
  text-align: left;
  white-space: ${(props) => (props.noForward ? "nowrap" : "unset")};
`;
