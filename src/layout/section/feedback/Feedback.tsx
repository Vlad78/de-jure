import { useTranslations } from "next-intl";
import styled from "styled-components";

import creds from "../../../assets/data/creds";
import { IconStripe } from "../../../assets/IconStripe";
import { Container } from "../../../components/Container";
import { CustomButton } from "../../../components/CustomButton";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconStripeWrapper } from "../../../components/IconWrapper";
import { Menu } from "../../../components/Menu";
import { TitleSection } from "../../../components/TitleSection";
import { font } from "../../../styles/FontSize";
import { theme } from "../../../styles/Theme";

export const Feedback = () => {
  const t = useTranslations("feedback");
  return (
    <StyledFeedback id={t("title")}>
      <Container>
        <IconStripeWrapper top="490px" left="404px">
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <TitleSection>{t("title")}</TitleSection>

        <FlexWrapper justify="space-between" gap="5%" align="start" position="relative" z={1}>
          <StyledCreds>
            <Menu icons="circle" />
            <FlexWrapper margin="17px 0 0 0" height="unset" gap="35px">
              <a href={creds.fb}>
                <IconStripe iconId="fb" height="22px" width="30px" />
              </a>
              <a href={creds.x}>
                <IconStripe iconId="x" height="22px" width="30px" />
              </a>
              <a href={creds.insta}>
                <IconStripe iconId="insta" height="22px" width="30px" />
              </a>
            </FlexWrapper>
          </StyledCreds>

          <StyledFrom>
            <FlexWrapper
              direction="row"
              wrap="wrap"
              gap="40px"
              align="start"
              justify="end"
              height="unset"
            >
              <input type="text" placeholder={t("name")} name="Name" id="name" />
              <input type="text" placeholder={t("phone")} name="Phone" id="phone" />
              <textarea
                placeholder={t("introduction")}
                autoComplete="false"
                draggable="false"
                name="Message"
                id="message"
              />
              <CustomButton text="send" />
            </FlexWrapper>
          </StyledFrom>
        </FlexWrapper>
      </Container>
    </StyledFeedback>
  );
};

const StyledFeedback = styled.section`
  margin-top: 237px;
  min-height: 691px;
`;

const StyledCreds = styled.div`
  flex-basis: 38%;
  display: flex;
  flex-direction: column;
  min-height: 437px;
  min-width: 350px;
  padding: 76px 32px;
  background-color: ${theme.colors.colorPrimeLight};
  border-radius: 50px;
  gap: 30px;

  svg {
    flex-shrink: 0;
  }
`;

const StyledFrom = styled.form`
  flex-grow: 1;
  flex-basis: 57%;

  input,
  textarea {
    min-width: 200px;
    border-bottom: 1px solid ${theme.colors.font};
    background-color: transparent;

    font-size: ${font(14, 22)};
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
  }

  input#name {
    flex-grow: 1;
    height: 45px;
  }
  input#phone {
    flex-grow: 1;
    height: 45px;
  }
  textarea {
    flex-basis: 100%;
    flex-grow: 1;
    height: 175px;
    resize: none;
  }

  button {
    margin-top: 110px;
  }
`;
