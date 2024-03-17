import { useTranslations } from 'next-intl';
import { useSpringCarousel } from 'react-spring-carousel';
import styled from 'styled-components';

import { IconStripe } from '../../../assets/IconStripe';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconStripeWrapper } from '../../../components/IconWrapper';
import { TitleSection } from '../../../components/TitleSection';
import { useMessageTyped } from '../../../hooks/useMessage';
import { font } from '../../../styles/FontSize';
import { theme } from '../../../styles/Theme';


const iconColors = ["#D3927E", "#FAC88B", "#7EA3D3"];

export const Advantages = () => {
  const t = useTranslations("advantages");
  const messages = useMessageTyped();
  const keys = Object.keys(messages.advantages.advantages);

  const { carouselFragment } = useSpringCarousel({
    slideType: "fixed",
    itemsPerSlide: 1.5,
    gutter: 40,
    enableFreeScrollDrag: true,
    draggingSlideTreshold: 100,
    items: keys.map((e, i) => ({
      id: e,
      renderItem: (
        <Card key={e}>
          <IconStripe iconId="advantageIcon" fill={iconColors[i]} />
          <h3>{t<any>(`advantages.${e}.title`)}</h3>
          <p>{t<any>(`advantages.${e}.desc`)}</p>
        </Card>
      ),
    })),
  });
  return (
    <StyledAdvantages id="Advantages">
      <Container>
        <IconStripeWrapper top="74px" left="-102px">
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <TitleSection>{t("title")}</TitleSection>
        {carouselFragment}
      </Container>
    </StyledAdvantages>
  );
};

const StyledAdvantages = styled.section`
  margin-top: 100px;
  min-height: 426px;

  .use-spring-carousel-main-wrapper {
    margin-top: 107px;
  }

  .use-spring-carousel-item {
    flex: unset !important;

    &:last-child {
      margin-right: 0 !important;
    }
  }

  @media ${theme.media.tablet} {
    .use-spring-carousel-main-wrapper {
      margin-top: 91px;
    }
  }
  @media ${theme.media.mobile} {
    margin-top: 60px;
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

  @media ${theme.media.tablet} {
    max-width: unset;
    min-width: unset;
    width: 200px;
  }
`;
