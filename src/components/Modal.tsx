"use client";

import disableScroll from 'disable-scroll';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MouseEventHandler, useEffect } from 'react';
import styled from 'styled-components';

import { IconStripe } from '../assets/IconStripe';
import { font } from '../styles/FontSize';
import { theme } from '../styles/Theme';
import { FlexWrapper } from './FlexWrapper';
import { Menu } from './Menu';


export const Modal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const section = searchParams.get("section") as keyof IntlMessages & "menu";
  const id = searchParams.get("id");

  const pathname = usePathname();
  const router = useRouter();

  const layoutOnClickHandler: MouseEventHandler<HTMLDialogElement> = (e) => {
    e.currentTarget === e.target && router.push(pathname, { scroll: false });
  };

  useEffect(() => {
    if (modal) {
      disableScroll.on();
    }
    return () => {
      disableScroll.off();
    };
  }, [modal]);

  const t = useTranslations(section);

  return (
    <>
      {modal && (
        <StyledLayout onClick={layoutOnClickHandler}>
          <StyledModal>
            <Link href={pathname} scroll={false}>
              <IconStripe iconId="cross" />
            </Link>
            <Container>
              {section === "menu" ? (
                <FlexWrapper direction="column" justify="space-between" gap="5%" align="start">
                  <Menu icons="circle" />
                </FlexWrapper>
              ) : (
                <>
                  <h3>{t<any>(`${section}.${id}.title`)}</h3>
                  <p>{t<any>(`${section}.${id}.text`)}</p>
                </>
              )}
            </Container>
          </StyledModal>
        </StyledLayout>
      )}
    </>
  );
};

const StyledLayout = styled.dialog`
  position: fixed;
  inset: 0;
  background-color: ${theme.colors["bgShaddy50%Op"]};
  overflow-y: auto;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  z-index: 1000;
`;

const StyledModal = styled.div`
  padding: 32px;
  border-radius: 20px;
  max-width: 75vw;
  min-width: 50vw;
  background: #ffffff;
  position: relative;

  a {
    display: contents;
  }

  > a:first-child svg {
    position: absolute;
    right: 24px;
    top: 24px;
  }

  h3 {
    margin: 31px 80px;
    max-width: 683px;
  }

  p {
    color: ${theme.colors.colorAltDark};
    margin: 0 102px 120px;
    font-size: ${font(16, 24)};
    line-height: 180%;
    letter-spacing: 0.02em;
    text-align: left;
  }

  @media ${theme.media.mobile} {
    padding: 32px 12px;
    max-width: 90vw;
  }
`;

const Container = styled.div`
  text-align: center;
`;
