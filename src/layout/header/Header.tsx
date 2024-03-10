import styled from 'styled-components';

import { IconStripe } from '../../assets/IconStripe';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Menu } from '../../components/Menu';
import { theme } from '../../styles/Theme';


export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <IconStripe iconId="logo" height="67px" fill={theme.colors.fontShaddy} />
          <FlexWrapper>
            <Menu icons="no" />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  min-height: 100px;
  width: 100%;
  z-index: 100;

  ${Container} {
    /* background-color: ${theme.colors.colorPrimeMedium}; */
    background-color: #0fffff00;
    color: ${theme.colors.fontShaddy};
    border-radius: 0px 0px 30px 30px;
  }

  svg {
    opacity: 0;
  }
`;
