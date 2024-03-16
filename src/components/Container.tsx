import styled from 'styled-components';

import { theme } from '../styles/Theme';


export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  min-height: inherit;
  height: inherit;
  max-height: inherit;
  padding: 0 150px;
  margin: 0 auto;
  position: relative;

  @media ${theme.media.tablet} {
    padding: 0 70px;
  }
  @media ${theme.media.mobile} {
    padding: 0 10px;
  }
`;
