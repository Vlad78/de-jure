import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { Container } from '../../../components/Container';
import { CustomButton } from '../../../components/CustomButton';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';


export const Map = () => {
  const t = useTranslations("map");
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
          <CustomButton text="build a route" />
        </FlexWrapper>
      </Container>
    </StyledMap>
  );
};

const StyledMap = styled.section`
  min-height: 518px;
  margin-top: 231px;
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
  }
`;
