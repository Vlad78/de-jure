import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MouseEventHandler, useEffect } from "react";
import styled from "styled-components";

import { IconStripe } from "../../assets/IconStripe";
import { font } from "../../styles/FontSize";
import { theme } from "../../styles/Theme";

type ModalProps = {
  children: React.ReactNode;
};

export const ModalWrapper = ({ children }: ModalProps) => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

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
            {children}
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
