import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { IconStripe } from '../../../assets/IconStripe';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { font } from '../../../styles/FontSize';
import { theme } from '../../../styles/Theme';


export const Card = ({ e }: { e: string }) => {
  const t = useTranslations("testimonials");

  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(ref.current?.offsetHeight! + 3);
  }, [ref]);

  return (
    <StyledCard key={e}>
      <ReviewText ref={ref} height={height}>
        {t<any>(`testimonials.${e}.text`)}
      </ReviewText>
      <FlexWrapper align="center">
        <Image
          alt={t<any>(`testimonials.${e}.alt`)}
          src={require(`../../../assets/imgs/reviews-photos/${e}.jpeg`)}
          className="testimonial-img"
        />
        <span>{t<any>(`testimonials.${e}.name`)}</span>
      </FlexWrapper>
      <Link href="#">
        <Rating>
          {[...Array(parseInt(t<any>(`testimonials.${e}.rating`)))].map((_, i) => (
            <IconStripe iconId="star" key={i} id={"star_" + i} />
          ))}
        </Rating>
        <div>12 reviews at {t<any>(`testimonials.${e}.sourse`)}</div>
      </Link>
    </StyledCard>
  );
};

export const ReviewText = styled.p.withConfig({
  shouldForwardProp: (props) => !["height"].includes(props),
})<{ ref: RefObject<HTMLDivElement>; height: number }>`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: ${(props) => props.height}px;
    background-color: ${theme.colors.bgAlt};
  }
`;

const Rating = styled.div`
  text-align: right;
  white-space: nowrap;
`;

const StyledCard = styled.div`
  max-width: 456px;
  min-height: 260px;

  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto max-content;
  align-content: stretch;
  align-items: end;
  justify-items: end;

  ${ReviewText} {
    grid-column: auto / span 2;
    line-height: 180%;
    margin-bottom: 40px;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow-y: clip;
    align-self: center;
  }

  ${FlexWrapper} {
    justify-self: start;
    gap: 21px;

    .testimonial-img {
      height: 50px;
      width: 50px;
    }
  }

  span {
    font-size: ${font(14, 24)};
    font-weight: 700;
    line-height: 180%;
    color: ${theme.colors.colorAltDark};
    white-space: nowrap;
  }

  a {
    text-align: right;
    display: block;
    color: ${theme.colors.colorAltNotSoDark};
  }

  svg {
    height: 24px;
    width: 24px;
  }

  @media ${theme.media.desktop} {
    min-height: 163px;

    ${ReviewText} {
      font-size: 11px;
      margin-bottom: 26px;
    }

    ${FlexWrapper} {
      gap: 10px;

      .testimonial-img {
        height: 29px;
        width: 29px;
      }
    }

    span {
      font-size: 14px;
    }

    a {
      font-size: 12px;
    }

    svg {
      height: 14px;
      width: 14px;
    }
  }

  @media ${theme.media.tablet} {
    ${ReviewText} {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr;
    justify-items: start;
    align-content: end;

    ${ReviewText} {
      grid-column: auto / span 1;
      margin-bottom: 10px;

      &::before {
        display: none;
      }
    }

    ${FlexWrapper} {
      order: 3;
    }

    a {
      order: 2;
      margin-bottom: 15px;
    }
    ${Rating} {
      text-align: left;
    }
  }

  @media screen and (max-width: 500px) {
    ${ReviewText} {
      &::before {
        display: none;
      }
    }
  }
`;
