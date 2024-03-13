import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IconStripe } from '../../assets/IconStripe';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Menu } from '../../components/Menu';
import { theme } from '../../styles/Theme';


export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setIsScrolled(window.scrollY > 50));
    }
  }, []);

  return (
    <StyledHeader isScrolled={isScrolled}>
      <Container>
        <OverflowWrapper>
          <FlexWrapper justify="space-between" align="center">
            <IconStripe iconId="logo" height="67px" fill={theme.colors.fontShaddy} />
            <FlexWrapper gap="90px">
              <Menu icons="no" />
            </FlexWrapper>
          </FlexWrapper>
        </OverflowWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  min-height: 100px;
  width: 100%;
  color: ${(props) => (props.isScrolled ? theme.colors.fontShaddy : theme.colors.font)};
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.01em;
  text-align: left;
  z-index: 100;

  ${Container} {
    background-color: ${(props) => (props.isScrolled ? theme.colors.colorPrimeMedium : "#fff00")};
    border-radius: 0px 0px 30px 30px;
    overflow: hidden;
    transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${FlexWrapper}:first-child {
    transform: ${(props) => (props.isScrolled ? "translateX(0)" : "translateX(-120px)")};
    transition: 0.1s ease-in-out;
    margin: 17px;
  }

  svg {
    opacity: ${(props) => (props.isScrolled ? "1" : "0")};
    transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const OverflowWrapper = styled.div`
  overflow: hidden;
`;
