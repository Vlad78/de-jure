import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";

import { IconStripe } from "../../assets/IconStripe";
import { font } from "../../styles/FontSize";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../FlexWrapper";
import LanguageSwitcher from "../LanguageSwitcher";
import { Menu } from "../Menu";
import { ModalWrapper } from "./ModalWrapper";

export const Modal = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section") as keyof IntlMessages & "menu" & null;
  const id = searchParams.get("id");
  const status = searchParams.get("status");

  const t = useTranslations(section);

  return (
    <ModalWrapper>
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
        ) : section !== null ? (
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
        ) : (
          ""
        )}
      </Container>
    </ModalWrapper>
  );
};

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
