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
import { Card, ReviewText } from './Card';


export const Testimonials = () => {
  const t = useTranslations("testimonials");
  const messages = useMessageTyped();
  const keys = Object.keys(messages.testimonials.testimonials);

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
    gutter: gutters(10, 142),
    items: keys.map((e) => ({
      id: e,
      renderItem: <Card e={e} />,
      renderThumb: <SliderDot onClick={() => slideToItem(e)} />,
    })),
  });

  useListenToCustomEvent((e: any) => {
    if (e.eventName === "onSlideChange") {
      setIndex(e.currentItem.id);
    }
  });

  return (
    <StyledTestimonials id="Testimonials" index={index}>
      <Container>
        <IconStripeWrapper top="421px" left="413px">
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <TitleSection>{t("title")}</TitleSection>
        <CarouselWrapper>{carouselFragment}</CarouselWrapper>
        <FlexWrapper
          justify="space-between"
          margin="40px 0 0 0"
          align="center"
          position="relative"
          z={2}
        >
          {thumbsFragment}
          <CarouselButtons slideToNextItem={slideToNextItem} slideToPrevItem={slideToPrevItem} />
        </FlexWrapper>
      </Container>
    </StyledTestimonials>
  );
};

const StyledTestimonials = styled.section<{ index: number }>`
  margin-top: 215px;
  min-height: 377px;

  @media ${theme.media.desktop} {
    margin-top: 150px;
  }

  ${TitleSection} {
    margin-bottom: calc(1em - 20px);
  }

  .use-spring-carousel-main-wrapper {
    position: relative;
    z-index: 2;
  }

  .use-spring-carousel-item {
    overflow: hidden;
    box-shadow: ${theme.colors.boxShadow};
    background: ${theme.colors.colorLight};

    &:nth-child(odd) {
      border-radius: 20px 100px 20px 20px;
      padding: 41px 26px 29px 86px;

      ${ReviewText} {
        text-align: left;
        &::before {
          left: -32.5px;
        }
      }

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: -20px;
        width: 14px;
        height: calc(100% + 20px);
        background-color: ${theme.colors.colorPrimeMedium};
      }
    }
    &:nth-child(even) {
      border-radius: 100px 20px 20px 20px;
      padding: 41px 86px 29px 34px;

      ${ReviewText} {
        text-align: right;
        &::before {
          right: -32.5px;
        }
      }

      &::before {
        content: "";
        position: absolute;
        right: 0;
        top: -20px;
        width: 14px;
        height: calc(100% + 20px);
        background-color: ${theme.colors.colorPrimeMedium};
      }
    }

    @media ${theme.media.desktop} {
      &:nth-child(odd) {
        border-radius: 8px 100px 20px 8px;
        padding: 29px 58px 29px 39px;

        ${ReviewText} {
          &::before {
            left: -11.5px;
          }
        }
      }
      &:nth-child(even) {
        border-radius: 100px 8px 8px 20px;
        padding: 29px 39px 29px 34px;

        ${ReviewText} {
          &::before {
            right: -11.5px;
          }
        }
      }
    }

    @media screen and (max-width: 850px) {
      &:nth-child(odd) {
        border-radius: 8px 70px 15px 8px;
        padding: 20px 26px 20px 38px;
      }
      &:nth-child(even) {
        border-radius: 70px 8px 8px 15px;
        padding: 20px 38px 20px 27px;
      }
    }

    @media screen and (max-width: 500px) {
      &:nth-child(odd) {
        border-radius: 40px 40px 20px 20px;
        padding: 20px 26px 20px 48px;

        &::before {
          width: 36px;
        }
      }

      &:nth-child(even) {
        border-radius: 40px 40px 20px 20px;
        padding: 20px 48px 20px 27px;

        &::before {
          width: 36px;
        }
      }
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
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% + 60px);
  padding: 30px;
  position: relative;
  left: -30px;
  overflow: hidden;
`;

const SliderDot = styled.div`
  width: 15px;
  height: 15px;
`;
