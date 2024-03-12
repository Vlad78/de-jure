import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import styled from "styled-components";

import { IconStripe } from "../../../assets/IconStripe";
import { Container } from "../../../components/Container";
import { CustomButton } from "../../../components/CustomButton";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconStripeWrapper } from "../../../components/IconWrapper";
import { TitleSection } from "../../../components/TitleSection";
import { useMessageTyped } from "../../../hooks/useMessage";
import { gutters } from "../../../styles/FontSize";
import { theme } from "../../../styles/Theme";

export const Stories = () => {
  const [firstBtn, setFirstBtn] = useState(false);
  const [secondBtn, setSecondBtn] = useState(false);
  const t = useTranslations("stories");
  const messages = useMessageTyped();
  const keys = Object.keys(messages.stories.stories);

  const [index, setIndex] = useState(1);
  const [width, setWidth] = useState(1600);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

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
    gutter: gutters(20, 100, width),
    items: keys.map((e, i) => ({
      id: e,
      renderItem: (
        <Card img={require(`../../../assets/imgs/stories/${i + 1}.jpeg`)} key={e}>
          <h3>{t<any>(`stories.${e}.title`)}</h3>
          <CustomButton option="transparent" text="readMore" />
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

        <FlexWrapper justify="space-between" margin="60px 0 0 0" align="center">
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
    </StyledStories>
  );
};

const StyledStories = styled.section<{ index: number }>`
  margin-top: 300px;
  min-height: 685px;

  .use-spring-carousel-main-wrapper {
    overflow: hidden;
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
`;

const Card = styled.div<{ img: { default: StaticImageData } }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-basis: 650px;
  height: 400px;
  color: ${theme.colors.colorLight};
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.img.default.src || "check"});
  background-size: cover;
  background-repeat: no-repeat;

  h3 {
    margin: 0 40px 40px 40px;
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
