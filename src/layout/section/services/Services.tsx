import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styled from 'styled-components';

import { Container } from '../../../components/Container';
import { TitleSection } from '../../../components/TitleSection';
import data from './data';


export const Services = () => {
  const t = useTranslations("services");
  return (
    <StyledServices id={t("title")}>
      <Container>
        <TitleSection>{t("title")}</TitleSection>
        <StyledGrid>
          {data().map((e, i) => {
            if (i > 7) return;
            return (
              <Tile key={e.id}>
                <Image alt={e.alt} src={e.img} width={200} height={200} />
                <h3>{e.title}</h3>
              </Tile>
            );
          })}
        </StyledGrid>
      </Container>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  margin-top: 200px;
  min-height: 933px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em 1em;
  grid-auto-flow: row dense;
`;

const Tile = styled.div`
  border-radius: 20px 20px 20px 20px;
  box-shadow: 0px 0px 30px 0px rgba(38, 45, 118, 0.15);

  &:nth-child(1) {
    border-radius: 150px 20px 20px 20px;
    grid-column: auto / span 2;
    grid-row: auto / span 2;
  }
  &:nth-child(2) {
    grid-column: auto / span 2;
    grid-row: auto / span 1;
  }
  &:nth-child(5) {
    grid-column: auto / span 2;
    grid-row: auto / span 1;
  }
  &:nth-child(6) {
    border-radius: 20px 20px 150px 20px;
    grid-column: auto / span 2;
    grid-row: auto / span 2;
  }
`;
