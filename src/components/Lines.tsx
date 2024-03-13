import styled from 'styled-components';


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
