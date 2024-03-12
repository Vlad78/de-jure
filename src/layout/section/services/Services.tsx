import { useTranslations } from "next-intl";
import Image from "next/image";
import styled from "styled-components";

import { Container } from "../../../components/Container";
import { TitleSection } from "../../../components/TitleSection";
import { font } from "../../../styles/FontSize";
import data from "./data";

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
                <ImgWrapperStyles
                  style={{
                    margin: `${0} ${e.right} ${0} ${e.left}`,
                  }}
                >
                  <Image
                    alt={e.alt}
                    src={e.img}
                    quality={100}
                    style={{
                      objectFit: "contain",
                      objectPosition: e.position || "top",
                      height: "100%",
                      width: "auto",
                    }}
                  />
                </ImgWrapperStyles>
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

const ImgWrapperStyles = styled.div`
  display: flex;
  flex-grow: 1;
`;

const StyledGrid = styled.div`
  /*
  height: 1404px;
  width: 1300px;
  e height: 330px;
  e width: 304px; */

  display: grid;
  grid-template-columns: repeat(4, minmax(152px, 304px));
  grid-template-rows: repeat(4, minmax(165px, 330px));
  grid-gap: 28px;
  aspect-ratio: 1300 / 1404;
`;

const Tile = styled.div`
  position: relative;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 0px 0px 30px 0px rgba(38, 45, 118, 0.15);
  aspect-ratio: 304 / 330;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  h3 {
    line-height: 160%;
    font-size: ${font(10, 20)};
    margin: 0 30px 46px 35px;
  }

  &:nth-child(1) {
    border-radius: 150px 20px 20px 20px;
    grid-column: auto / span 2;
    grid-row: auto / span 2;
    aspect-ratio: 636 / 688;

    h3 {
      font-size: ${font(15, 40)};
      margin: 0 60px 61px 61px;
    }
  }
  &:nth-child(2) {
    grid-column: auto / span 2;
    grid-row: auto / span 1;
    aspect-ratio: 636 / 330;
    flex-direction: row;

    h3 {
      font-size: ${font(15, 30)};
      flex-grow: 1;
      align-self: flex-end;
      margin-right: 45px;
      margin-bottom: 32px;
    }
  }
  &:nth-child(5) {
    grid-column: auto / span 2;
    grid-row: auto / span 1;
    aspect-ratio: 636 / 330;
    flex-direction: row;

    ${ImgWrapperStyles} {
      transform: scale(1.7) translate(24px, -17px);
    }

    h3 {
      font-size: ${font(15, 30)};
      flex-grow: 1;
      margin: 0 30px 46px 0px;
      align-self: flex-end;
      margin-right: 45px;
      margin-bottom: 32px;
      z-index: 1;
    }
  }
  &:nth-child(6) {
    border-radius: 20px 20px 150px 20px;
    grid-column: auto / span 2;
    grid-row: auto / span 2;
    aspect-ratio: 636 / 688;

    h3 {
      font-size: ${font(15, 40)};
      margin: 0 60px 61px 61px;
    }
  }
`;
