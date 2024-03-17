import styled from 'styled-components';

import { theme } from '../styles/Theme';


export const Lines = () => {
  return (
    <Wrapper>
      <StyledLines />
      <StyledLinesNoBorders />
      <StyledLines />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  top: 300px;
  left: 150px;
  right: 150px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;

  @media ${theme.media.desktop} {
    left: 100px;
    right: 100px;
  }
  @media ${theme.media.tablet} {
    left: 70px;
    right: 70px;
  }
  @media ${theme.media.mobile} {
    left: 10px;
    right: 10px;
  }
`;

const StyledLines = styled.div`
  position: relative;
  flex-grow: 1;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
`;

const StyledLinesNoBorders = styled.div`
  position: relative;
  flex-grow: 1;
  border: none;
`;
