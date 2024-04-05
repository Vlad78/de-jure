"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MouseEventHandler, useEffect } from "react";
import styled from "styled-components";

import { IconStripe } from "../assets/IconStripe";
import { font } from "../styles/FontSize";
import { theme } from "../styles/Theme";
import { FlexWrapper } from "./FlexWrapper";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu } from "./Menu";

export const Modal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const section = searchParams.get("section") as keyof IntlMessages & "menu";
  const id = searchParams.get("id");
  const status = searchParams.get("status");

  const pathname = usePathname();
  const router = useRouter();
  const closeModal = () => {
    router.push(pathname, { scroll: false });
  };

  const layoutOnClickHandler: MouseEventHandler<HTMLDialogElement> = (e) => {
    e.currentTarget === e.target && closeModal();
  };

  const addRightPadding = (scrollBarWidth: number) => {
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    const headerElement = document.querySelector("header");
    if (headerElement) {
      headerElement.style.right = `${scrollBarWidth}px`;
    }
  };

  useEffect(() => {
    if (modal) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      addRightPadding(scrollBarWidth);
      document.body.style.overflowY = "hidden";
    }
  }, [modal]);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const t = useTranslations(section);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        document.body.style.overflowY = "auto";
        addRightPadding(0);
      }}
    >
      {modal && (
        <StyledLayout
          onClick={layoutOnClickHandler}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            duration: 0.3,
            ease: "backInOut",
          }}
        >
          <StyledModal>
            <div className="close-modal" onClick={closeModal}>
              <IconStripe iconId="cross" />
            </div>

            <Container>
              {section === "menu" ? (
                <FlexWrapper direction="column" justify="space-between" gap="5%" align="start">
                  <Menu icons="circle" />
                  <FlexWrapper>
                    <IconStripe iconId="web" />
                    <LanguageSwitcher />
                  </FlexWrapper>
                </FlexWrapper>
              ) : section === "feedback" ? (
                <>
                  {status === "ok" ? (
                    <h3>{t<any>("feedbackReceived")}</h3>
                  ) : (
                    <h3>{t<any>("feedbackError")}</h3>
                  )}
                  {/* TODO здесь нужно написать ссылки на социальные сети */}
                </>
              ) : (
                <>
                  <h3>{t<any>(`${section}.${id}.title`)}</h3>
                  <div className="Modal__Container-desc">
                    {t.rich<any>(`${section}.${id}.text`, {
                      ol: (chunk) => <ol>{chunk}</ol>,
                      li: (chunk) => <li>{chunk}</li>,
                      ul: (chunk) => <ul>{chunk}</ul>,
                      strong: (chunk) => <strong>{chunk}</strong>,
                      p: (chunk) => <p>{chunk}</p>,
                    })}
                  </div>
                </>
              )}
            </Container>
          </StyledModal>
        </StyledLayout>
      )}
    </AnimatePresence>
  );
};

const StyledLayout = styled(motion.dialog)`
  position: fixed;
  inset: 0;
  background-color: ${theme.colors["bgShaddy50%Op"]};
  overflow-y: auto;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  border: none;
  z-index: 1000;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledModal = styled.div`
  padding: ${font(32, 68)};
  padding-bottom: 68px;
  margin: 32px;
  border-radius: 20px;
  max-width: 75vw;
  min-width: 50vw;
  height: fit-content;
  background: #ffffff;
  position: relative;

  .close-modal {
    display: contents;
    cursor: pointer;

    svg {
      position: absolute;
      right: 24px;
      top: 24px;
    }
  }

  h3 {
    margin: 31px ${font(40, 80)};
    max-width: 683px;
    text-align: center;
  }

  @media ${theme.media.mobile} {
    padding: 32px 20px;
    padding-bottom: 68px;
    max-width: 90vw;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .Modal__Container-desc {
    text-align: left;
    max-height: inherit;
    font-size: ${font(14, 20)};

    p {
      font-size: inherit;
      line-height: 136.15%;
      letter-spacing: 0em;
      margin: ${font(18, 30)} 0;
      color: ${theme.colors.colorAltDark};
    }
    ul {
      font-size: inherit;
      color: ${theme.colors.colorAltDark};
      margin: ${font(18, 30)} 0;
      padding-left: ${font(18, 30)} 0;
      list-style: disc;
      margin-bottom: 35px;
    }
    ol {
      font-size: inherit;
      color: ${theme.colors.colorAltDark};
      margin: ${font(18, 30)} 0;
      padding-left: ${font(10, 24)} 0;
      margin-bottom: 35px;
    }
    li {
      margin-bottom: 8px;
    }
  }
`;
