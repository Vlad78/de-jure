import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import styled from 'styled-components';

import { IconStripe } from '../../../assets/IconStripe';
import { CarouselButtons } from '../../../components/Carousel/CarouselButtons';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconStripeWrapper } from '../../../components/IconWrapper';
import { TitleSection } from '../../../components/TitleSection';
import { useMessageTyped } from '../../../hooks/useMessage';
import { gutters } from '../../../styles/FontSize';
import { theme } from '../../../styles/Theme';
import { getScreenWidth } from '../../../utils/getScreenWidth';
import { Card } from './Card';


export const Stories = () => {
  const t = useTranslations("stories");
  const messages = useMessageTyped();
  const keys = Object.keys(messages.stories.stories);

  const [index, setIndex] = useState(1);

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    thumbsFragment,
    slideToItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    itemsPerSlide: getScreenWidth() > 500 ? 2 : 1,
    withLoop: true,
    withThumbs: true,
    gutter: gutters(20, 100),
    items: keys.map((e, i) => ({
      id: e,
      renderItem: <Card e={e} i={i} />,
      renderThumb: <SliderDot onClick={() => slideToItem(e)} />,
    })),
  });

  useListenToCustomEvent((e: any) => {
    if (e.eventName === "onSlideChange") {
      setIndex(e.currentItem.id);
    }
  });

  return (
    <StyledStories id={t("title")} index={index}>
      <Container>
        <IconStripeWrapper top="376px" left="-167px">
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <IconStripeWrapper top="46.5px" left="1145px">
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <TitleSection>{t("title")}</TitleSection>

        {carouselFragment}

        <FlexWrapper justify="space-between" align="center" position="relative" z={2}>
          {thumbsFragment}
          <CarouselButtons slideToNextItem={slideToNextItem} slideToPrevItem={slideToPrevItem} />
        </FlexWrapper>
      </Container>
    </StyledStories>
  );
};

const StyledStories = styled.section<{ index: number }>`
  margin-top: 300px;
  min-height: 410px;

  @media ${theme.media.desktop} {
    margin-top: 172px;
  }

  .use-spring-carousel-main-wrapper {
    overflow: hidden;
    position: relative;
    z-index: 2;
  }

  .use-spring-carousel-item {
    overflow: hidden;

    &:nth-child(odd) {
      border-radius: 100px 20px 100px 20px;
    }
    &:nth-child(even) {
      border-radius: 20px 100px 20px 100px;
    }
  }
  .thumb-item {
    margin-right: 15px;
    background-color: ${theme.colors.bgPlug};
    border-radius: 50%;
  }

  #thumb-${(props) => props.index} {
    background-color: ${theme.colors.colorPrimeMedium};
  }

  ${FlexWrapper} {
    margin-top: 60px;
  }

  @media ${theme.media.tablet} {
    .use-spring-carousel-item {
      &:nth-child(odd) {
        border-radius: 70px 10px 70px 10px;
      }
      &:nth-child(even) {
        border-radius: 10px 70px 10px 70px;
      }
    }
    ${FlexWrapper} {
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 500px) {
    .use-spring-carousel-item:nth-child(odd),
    .use-spring-carousel-item:nth-child(even) {
      border-radius: 70px 70px 10px 10px;
    }
    /* ${FlexWrapper} {
      margin-top: 50px;
    } */
  }
`;

const SliderDot = styled.div`
  width: 15px;
  height: 15px;
`;
