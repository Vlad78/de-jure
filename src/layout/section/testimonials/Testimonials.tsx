import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { IconStripe } from '../../../assets/IconStripe';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconStripeWrapper } from '../../../components/IconWrapper';
import { TitleSection } from '../../../components/TitleSection';
import { useMessageTyped } from '../../../hooks/useMessage';
import { theme } from '../../../styles/Theme';


export const Testimonials = () => {
  const [firstBtn, setFirstBtn] = useState(false);
  const [secondBtn, setSecondBtn] = useState(false);

  const t = useTranslations("testimonials");
  const messages = useMessageTyped();
  const keys = Object.keys(messages.testimonials.testimonials);

  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(20);

  useEffect(() => {
    setHeight(ref.current?.offsetHeight! + 3);
  }, [ref]);

  return (
    <StyledTestimonials id={t("title")}>
      <Container>
        <TitleSection>{t("title")}</TitleSection>
        <IconStripeWrapper top="-44px" left="544px">
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <FlexWrapper justify="space-between">
          {keys.map((e, i) => (
            <Card>
              <ReviewText ref={ref} height={height}>
                {t<any>(`testimonials.${e}.text`)}
              </ReviewText>
              <div>
                <Image
                  alt={t<any>(`testimonials.${e}.alt`)}
                  src={require(`../../../assets/imgs/reviews-photos/${e}.jpeg`)}
                />
                <span>{t<any>(`testimonials.${e}.name`)}</span>
              </div>
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
    </StyledTestimonials>
  );
};

const StyledTestimonials = styled.section`
  margin-top: 215px;
  min-height: 604px;
`;

const ReviewText = styled.div<{ ref: RefObject<HTMLDivElement>; height: number }>`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 1px;
    height: ${(props) => props.height}px;
    background-color: ${theme.colors.bgAlt};
  }
`;

const Card = styled.div`
  flex-basis: 40%;
  min-width: 572px;
  height: 330px;

  position: relative;
  display: grid;
  grid-template-columns: auto 164px;
  grid-template-rows: auto auto;
  align-content: space-between;

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
      width: 14px;
      height: inherit;
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
      width: 14px;
      height: inherit;
      background-color: ${theme.colors.colorPrimeMedium};
      border-radius: 0px 20px 20px 0px;
    }
  }

  div:nth-of-type(1) {
    grid-column: auto / span 2;
  }
`;

const ButtonsBlock = styled.div`
  button:nth-child(1) > svg {
    transform: rotate(180deg);
  }
`;
