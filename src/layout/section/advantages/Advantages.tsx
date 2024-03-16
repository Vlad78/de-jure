import { useTranslations } from "next-intl";
import styled from "styled-components";

import { IconStripe } from "../../../assets/IconStripe";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconStripeWrapper } from "../../../components/IconWrapper";
import { TitleSection } from "../../../components/TitleSection";
import { useMessageTyped } from "../../../hooks/useMessage";
import { font } from "../../../styles/FontSize";
import { theme } from "../../../styles/Theme";

const iconColors = ["#D3927E", "#FAC88B", "#7EA3D3"];

export const Advantages = () => {
  const t = useTranslations("advantages");
  const messages = useMessageTyped();
  const keys = Object.keys(messages.advantages.advantages);
  return (
    <StyledAdvantages id="Advantages">
      <Container>
        <IconStripeWrapper top="74px" left="-102px">
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <TitleSection>{t("title")}</TitleSection>
        <FlexWrapper
          margin="107px 0 0 0"
          justify="space-between"
          position="relative"
          z={2}
          gap="40px"
        >
          {keys.map((key, i) => (
            <Card key={key}>
              <IconStripe iconId="advantageIcon" fill={iconColors[i]} />
              <h3>{t<any>(`advantages.${key}.title`)}</h3>
              <p>{t<any>(`advantages.${key}.desc`)}</p>
            </Card>
          ))}
        </FlexWrapper>
      </Container>
    </StyledAdvantages>
  );
};

const StyledAdvantages = styled.section`
  margin-top: 100px;
  min-height: 426px;

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      margin-top: 91px;
    }
  }
`;

const Card = styled.div`
  border-radius: 20px;
  max-width: 350px;
  min-width: 198px;
  padding: 73px 0;
  background-color: ${theme.colors.colorLight};
  box-shadow: 0px 10px 60px 0px rgba(38, 45, 118, 0.08);

  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    position: absolute;
    top: -80px;
  }

  h3 {
    max-width: 70%;
    font-size: ${font(16, 32)};
    margin: 0;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0;
    text-align: center;
  }

  p {
    max-width: 80%;
    margin-top: 40px;
    text-align: center;
  }

  @media ${theme.media.desktop} {
    padding: 46px 0;

    svg {
      height: 158.4px;
      width: 158.4px;
      transform: translateY(10.8px);
    }
  }

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      margin-top: 91px;
    }

    svg {
      height: 128.4px;
      width: 128.4px;
      transform: translateY(25.8px);
    }

    h3 {
      line-height: 24px;
      font-size: 20px;
    }

    p {
      margin-top: 20px;
      font-size: 16px;
    }
  }
`;
