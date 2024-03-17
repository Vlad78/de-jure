import { useTranslations } from 'next-intl';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import creds from '../../../assets/data/creds';
import { Container } from '../../../components/Container';
import { CustomButton } from '../../../components/CustomButton';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';


// https://snazzymaps.com/build-a-map/edit/584628
export const Map = () => {
  const t = useTranslations("map");

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(creds.googleMap, "_blank", "noopener, noreferrer")?.focus();
  };

  return (
    <StyledMap id={t("title")}>
      <Container>
        <FlexWrapper direction="column" align="center" gap="100px" height="inherit">
          <IframeWrapper>
            <iframe
              src="https://snazzymaps.com/embed/584628"
              width="100%"
              height="100%"
              loading="eager"
            ></iframe>
          </IframeWrapper>
          <CustomButton text="build a route" onClick={onClickHandler} />
        </FlexWrapper>
      </Container>
    </StyledMap>
  );
};

const StyledMap = styled.section`
  min-height: 391px;
  margin-top: 231px;

  @media ${theme.media.desktop} {
    margin-top: 142px;

    ${FlexWrapper} {
      gap: 82px;
    }
  }
  @media ${theme.media.mobile} {
    margin-top: 96px;

    ${FlexWrapper} {
      gap: 50px;
    }

    button {
      width: 252px;
      font-size: 28px;
    }
  }
`;

const IframeWrapper = styled.div`
  width: 100%;
  min-height: inherit;
  background-color: ${theme.colors.bgDark};
  border-radius: 70px;
  overflow: hidden;

  iframe {
    min-height: inherit;
    border: none;
    height: 561px;
  }

  @media ${theme.media.desktop} {
    iframe {
      height: 390px;
    }
  }
`;
