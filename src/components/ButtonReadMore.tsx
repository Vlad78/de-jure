import styled from 'styled-components';

import { theme } from '../styles/Theme';


type ButtonReadMore = {
  title?: string;
};
export const ButtonReadMore = ({ title }: ButtonReadMore) => {
  return <StyledButton>{title || "Read More"}</StyledButton>;
};

const StyledButton = styled.button`
  width: 252px;
  padding: 14px;
  font-size: 28px;
  font-weight: 700;
  line-height: 136.15%;
  text-align: center;
  border-radius: 10px;
  background-color: ${theme.colors.colorPrimeMedium};
`;
