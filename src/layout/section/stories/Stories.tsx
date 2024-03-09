import { useTranslations } from 'next-intl';
import { StaticImageData } from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

import { IconStripe } from '../../../assets/IconStripe';
import { ButtonReadMore } from '../../../components/ButtonReadMore';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconStripeWrapper } from '../../../components/IconWrapper';
import { TitleSection } from '../../../components/TitleSection';
import { useMessageTyped } from '../../../hooks/useMessage';
import { theme } from '../../../styles/Theme';


export const Stories = () => {
  const [firstBtn, setFirstBtn] = useState(false);
  const [secondBtn, setSecondBtn] = useState(false);
  const t = useTranslations("stories");
  const messages = useMessageTyped();
  const keys = Object.keys(messages.stories.stories);
  return (
    <StyledStories>
      <Container>
        <IconStripeWrapper top="74px" left="44px">
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <IconStripeWrapper top="74px" left="1344px">
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <TitleSection>{t("title")}</TitleSection>
        <FlexWrapper justify="space-between">
          {keys.map((e, i) => (
            <Card img={require(`../../../assets/imgs/stories/${i + 1}.jpeg`)}>
              <h3>{t<any>(`stories.${e}.title`)}</h3>
              <ButtonReadMore option="transparent" />
            </Card>
          ))}
        </FlexWrapper>
        <FlexWrapper justify="space-between">
          <div>Pins</div>
          <ButtonsBlock>
            <button onMouseOver={() => setFirstBtn(true)} onMouseOut={() => setFirstBtn(false)}>
              <IconStripe iconId="arrowRight" isHovered={firstBtn} width="60px" height="60px" />
            </button>
            <button onMouseOver={() => setSecondBtn(true)} onMouseOut={() => setSecondBtn(false)}>
              <IconStripe iconId="arrowRight" isHovered={secondBtn} width="60px" height="60px" />
            </button>
          </ButtonsBlock>
        </FlexWrapper>
      </Container>
    </StyledStories>
  );
};

const StyledStories = styled.section`
  margin-top: 300px;
  min-height: 685px;
`;

const Card = styled.div<{ img: { default: StaticImageData } }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-basis: 600px;
  height: 400px;
  color: ${theme.colors.colorLight};
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.img.default.src || "check"});
  background-size: cover;
  background-repeat: no-repeat;

  &:nth-child(odd) {
    border-radius: 100px 20px 100px 20px;
  }
  &:nth-child(even) {
    border-radius: 20px 100px 20px 100px;
  }
`;

const ButtonsBlock = styled.div`
  button:nth-child(1) > svg {
    transform: rotate(180deg);
  }
`;
