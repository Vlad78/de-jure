import { useState } from 'react';
import styled from 'styled-components';

import { IconStripe } from '../../assets/IconStripe';
import { theme } from '../../styles/Theme';


export const CarouselButtons = ({
  slideToPrevItem,
  slideToNextItem,
}: {
  slideToPrevItem: () => void;
  slideToNextItem: () => void;
}) => {
  const [firstBtn, setFirstBtn] = useState(false);
  const [secondBtn, setSecondBtn] = useState(false);
  return (
    <StyledCarouselButtons>
      <button
        onMouseOver={() => setFirstBtn(true)}
        onMouseOut={() => setFirstBtn(false)}
        onClick={slideToPrevItem}
      >
        <IconStripe iconId="arrowRight" isHovered={firstBtn} id={"arrowR_1"} />
      </button>
      <button
        onMouseOver={() => setSecondBtn(true)}
        onMouseOut={() => setSecondBtn(false)}
        onClick={slideToNextItem}
      >
        <IconStripe iconId="arrowRight" isHovered={secondBtn} id={"arrowR_2"} />
      </button>
    </StyledCarouselButtons>
  );
};

const StyledCarouselButtons = styled.div`
  display: flex;
  gap: 20px;

  button:nth-child(1) > svg {
    transform: rotate(180deg);
  }

  svg {
    width: 60px;
    height: 60px;

    @media ${theme.media.tablet} {
      width: 45.5px;
      height: 45.5px;
    }
  }
`;
