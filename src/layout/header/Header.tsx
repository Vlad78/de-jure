import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IconStripe } from '../../assets/IconStripe';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { Menu } from '../../components/Menu';
import { theme } from '../../styles/Theme';


export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [width, setWidth] = useState(0);

  // TODO why it doesn't work?
  // const scrollAction = () => {
  //   setIsScrolled(window.scrollY > 50);
  //   setWidth(window.innerWidth);
  // };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setIsScrolled(window.scrollY > 50);
        setWidth(window.innerWidth);
      });
      setIsScrolled(window.scrollY > 50);
      setWidth(window.innerWidth);
    }

    return window.removeEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <StyledHeader isScrolled={isScrolled}>
      <Container>
        {width === 0 && <div></div>}
        {width <= 576 && width !== 0 && (
          <FlexWrapper justify="end">
            <Link href={"/?modal=true&section=menu"} scroll={false}>
              <Burger>
                <div></div>
              </Burger>
            </Link>
          </FlexWrapper>
        )}
        {width > 576 && (
          <OverflowWrapper>
            <FlexWrapper justify="space-between" align="center">
              <IconStripe iconId="logo" height="47px" fill={theme.colors.fontShaddy} />
              <MenuWrapper>
                <Menu icons="no" />
                <LanguageSwitcher />
              </MenuWrapper>
            </FlexWrapper>
          </OverflowWrapper>
        )}
      </Container>
    </StyledHeader>
  );
};

const OverflowWrapper = styled.div`
  overflow: hidden;
`;

const StyledHeader = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  width: 100%;
  color: ${(props) => (props.isScrolled ? theme.colors.fontShaddy : theme.colors.font)};
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.01em;
  white-space: nowrap;
  text-align: left;
  z-index: 100;

  ${Container} {
    background-color: ${(props) => (props.isScrolled ? theme.colors.colorPrimeMedium : "#fff0")};
    border-radius: 0px 0px 30px 30px;
    overflow: hidden;
    transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${OverflowWrapper} > ${FlexWrapper}:nth-child(1) {
    transform: ${(props) => (props.isScrolled ? "translateX(0)" : "translateX(-80px)")};
    transition: 0.1s ease-in-out;
    margin: 17px;
    justify-content: space-between;
  }

  svg {
    opacity: ${(props) => (props.isScrolled ? "1" : "0")};
    transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    flex-shrink: 0;
    margin-right: 15px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 950px;

  @media ${theme.media.desktop} {
    div:nth-child(3) {
      display: none;
    }
  }

  @media ${theme.media.tablet} {
    justify-content: flex-end;
    gap: 40px;
  }
`;

const Burger = styled.button`
  width: 35px;
  height: 35px;
  margin: 12px 20px;
  background-color: transparent;

  div {
    width: 36px;
    height: 2.5px;
    background-color: ${theme.colors.font};
    position: absolute;

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2.5px;
      background-color: inherit;
      position: absolute;
      transform: translateY(-10px);
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2.5px;
      background-color: inherit;
      position: absolute;
      transform: translateY(10px);
    }
  }
`;
