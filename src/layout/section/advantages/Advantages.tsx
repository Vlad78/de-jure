import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { IconStripe } from '../../../assets/IconStripe';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconStripeWrapper } from '../../../components/IconWrapper';
import { TitleSection } from '../../../components/TitleSection';
import { useMessageTyped } from '../../../hooks/useMessage';
import { theme } from '../../../styles/Theme';


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
        <FlexWrapper margin="49px 0 0 0" justify="space-between" position="relative" z={2}>
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
  min-height: 601px;
`;

const Card = styled.div`
  border-radius: 20px;
  max-width: 350px;
  min-width: 300px;
  height: 379px;
  padding: 73px 55px;
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
    font-size: 32px;
    margin: 0;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0;
    text-align: center;
  }

  p {
    margin-top: 40px;
    text-align: center;
  }
`;
