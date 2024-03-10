import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { IconStripe } from '../../../assets/IconStripe';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconStripeWrapper } from '../../../components/IconWrapper';
import { TitleSection } from '../../../components/TitleSection';
import { useMessageTyped } from '../../../hooks/useMessage';


const iconColors = ["#D3927E", "#FAC88B", "#7EA3D3"];

export const Advantages = () => {
  const t = useTranslations("advantages");
  const messages = useMessageTyped();
  const keys = Object.keys(messages.advantages.advantages);
  return (
    <StyledAdvantages id={t("title")}>
      <Container>
        <IconStripeWrapper>
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <TitleSection>{t("title")}</TitleSection>
        <FlexWrapper>
          {keys.map((key, i) => (
            <div key={key}>
              <IconStripe iconId="advantageIcon" fill={iconColors[i]} />
              <h3>{t<any>(`advantages.${key}.title`)}</h3>
              <p>{t<any>(`advantages.${key}.desc`)}</p>
            </div>
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
