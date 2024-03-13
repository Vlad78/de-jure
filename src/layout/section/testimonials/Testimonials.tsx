import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { RefObject, useEffect, useRef, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import styled from 'styled-components';

import { IconStripe } from '../../../assets/IconStripe';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconStripeWrapper } from '../../../components/IconWrapper';
import { TitleSection } from '../../../components/TitleSection';
import { useMessageTyped } from '../../../hooks/useMessage';
import { font, gutters } from '../../../styles/FontSize';
import { theme } from '../../../styles/Theme';


export const Testimonials = () => {
  const [firstBtn, setFirstBtn] = useState(false);
  const [secondBtn, setSecondBtn] = useState(false);

  const t = useTranslations("testimonials");
  const messages = useMessageTyped();
  const keys = Object.keys(messages.testimonials.testimonials);

  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(20);
  const [width, setWidth] = useState(1600);

  useEffect(() => {
    setHeight(ref.current?.offsetHeight! + 3);
    setWidth(window.innerWidth);
  }, [ref]);

  const [index, setIndex] = useState(1);

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    thumbsFragment,
    slideToItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    itemsPerSlide: 2,
    withLoop: true,
    withThumbs: true,
    gutter: gutters(20, 142, width),
    items: keys.map((e) => ({
      id: e,
      renderItem: (
        <Card key={e}>
          <ReviewText ref={ref} height={height}>
            {t<any>(`testimonials.${e}.text`)}
          </ReviewText>
          <FlexWrapper align="center" gap="21px">
            <Image
              alt={t<any>(`testimonials.${e}.alt`)}
              src={require(`../../../assets/imgs/reviews-photos/${e}.jpeg`)}
            />
            <span>{t<any>(`testimonials.${e}.name`)}</span>
          </FlexWrapper>
          <div>
            <div>
              {[...Array(parseInt(t<any>(`testimonials.${e}.rating`)))].map((_, i) => (
                <span key={i}>
                  <IconStripe iconId="star" />
                </span>
              ))}
            </div>
            <div>
              <Link href="#">12 reviews at {t<any>(`testimonials.${e}.sourse`)}</Link>
            </div>
          </div>
        </Card>
      ),
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
          <ButtonsBlock>
            <button
              onMouseOver={() => setFirstBtn(true)}
              onMouseOut={() => setFirstBtn(false)}
              onClick={slideToPrevItem}
            >
              <IconStripe iconId="arrowRight" isHovered={firstBtn} width="60px" height="60px" />
            </button>
            <button
              onMouseOver={() => setSecondBtn(true)}
              onMouseOut={() => setSecondBtn(false)}
              onClick={slideToNextItem}
            >
              <IconStripe iconId="arrowRight" isHovered={secondBtn} width="60px" height="60px" />
            </button>
          </ButtonsBlock>
        </FlexWrapper>
      </Container>
    </StyledTestimonials>
  );
};

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% + 40px);
  padding: 20px;
  position: relative;
  left: -20px;
  overflow: hidden;
`;

const ReviewText = styled.p<{ ref: RefObject<HTMLDivElement>; height: number }>`
  position: relative;
  display: block;
  &::before {
    content: "";
    position: absolute;
    width: 1px;
    height: ${(props) => props.height}px;
    background-color: ${theme.colors.bgAlt};
  }
`;

const StyledTestimonials = styled.section<{ index: number }>`
  margin-top: 215px;
  min-height: 604px;

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
      padding: 41px 26px 28px 87px;

      ${ReviewText} {
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
        border-radius: 20px 0px 0px 20px;
      }
    }
    &:nth-child(even) {
      border-radius: 100px 20px 20px 20px;
      padding: 41px 54.5px 28px 34px;

      ${ReviewText} {
        &::before {
          right: -24.5px;
        }
      }

      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: -20px;
        width: 14px;
        height: calc(100% + 20px);
        background-color: ${theme.colors.colorPrimeMedium};
        border-radius: 0px 20px 20px 0px;
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

const Card = styled.div`
  max-width: 456px;
  min-height: 260px;

  position: relative;
  display: grid;
  grid-template-columns: auto 164px;
  grid-template-rows: auto auto;
  align-content: space-between;

  p {
    grid-column: auto / span 2;
    line-height: 180%;
    margin-bottom: 40px;
  }

  span {
    font-size: ${font(14, 24)};
    font-weight: 700;
    line-height: 180%;
  }
`;

const SliderDot = styled.div`
  width: 15px;
  height: 15px;
`;

const ButtonsBlock = styled.div`
  display: flex;
  gap: 20px;

  button:nth-child(1) > svg {
    transform: rotate(180deg);
  }
`;
