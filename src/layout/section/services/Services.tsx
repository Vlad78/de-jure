import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { Container } from "../../../components/Container";
import { TitleSection } from "../../../components/TitleSection";
import { font } from "../../../styles/FontSize";
import { theme } from "../../../styles/Theme";
import data from "./data";

export const Services = () => {
  const t = useTranslations("services");

  return (
    <>
      <StyledServices id="Services">
        <Container>
          <TitleSection>{t("title")}</TitleSection>
          <StyledGrid>
            {data()
              .slice(0, 8)
              .map((e) => (
                <Link
                  href={`/?modal=true&section=services&id=${e.id}`}
                  style={{ display: "contents" }}
                  scroll={false}
                  key={e.id}
                >
                  <div>
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
                  </div>
                </Link>
              ))}
          </StyledGrid>
        </Container>
      </StyledServices>
    </>
  );
};

const StyledServices = styled.section`
  margin-top: 200px;
  min-height: 580px;

  @media ${theme.media.tablet} {
    margin-top: 100px;
  }
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
  e width: 304px;
  */

  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 304px));
  grid-template-rows: repeat(4, minmax(auto, 330px));
  grid-gap: 28px;
  aspect-ratio: 1300 / 1404;

  a > div {
    position: relative;
    border-radius: 20px 20px 20px 20px;
    box-shadow: 0px 0px 30px 0px rgba(38, 45, 118, 0.15);
    aspect-ratio: 304 / 330;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    background-color: ${theme.colors.colorLight};
    z-index: 2;
    transition: 0.3s;

    ${ImgWrapperStyles} {
      height: 0%;
    }

    h3 {
      line-height: 160%;
      font-size: ${font(12, 20)};
      margin: 0 30px 46px 35px;
    }
    &:hover {
      text-decoration: none;
      transform: scale(0.99);
      transition: 0.25s;
      box-shadow: 0px 0px 30px 0px rgba(38, 45, 118, 0.25);
    }
  }

  a:nth-of-type(1) > div {
    border-radius: 150px 20px 20px 20px;
    grid-column: auto / span 2;
    grid-row: auto / span 2;
    aspect-ratio: 636 / 688;

    h3 {
      font-size: ${font(12, 40)};
      margin: 0 60px 61px 61px;
    }
  }

  a:nth-of-type(2) > div,
  a:nth-of-type(5) > div {
    grid-column: auto / span 2;
    grid-row: auto / span 1;
    aspect-ratio: 636 / 330;
    flex-direction: row;

    ${ImgWrapperStyles} {
      height: unset;
    }

    h3 {
      font-size: ${font(12, 30)};
      flex-grow: 1;
      align-self: flex-end;
      margin-right: 45px;
      margin-bottom: 32px;
      z-index: 1;
    }
  }

  a:nth-of-type(5) > div {
    ${ImgWrapperStyles} {
      transform: scale(1.7) translate(24px, -17px);
    }
  }

  a:nth-of-type(6) > div {
    border-radius: 20px 20px 150px 20px;
    grid-column: auto / span 2;
    grid-row: auto / span 2;
    aspect-ratio: 636 / 688;

    h3 {
      font-size: ${font(12, 40)};
      margin: 0 60px 61px 61px;
    }
  }

  @media ${theme.media.desktop} {
    a > div {
      h3 {
        line-height: 150%;
        font-size: 12px;
        margin: 0 15px 15px 15px;
      }
    }
    a:nth-of-type(1) > div {
      h3 {
        margin: 0 30px 50px 30px;
      }
    }

    a:nth-of-type(6) > div {
      h3 {
        margin: 0 30px 50px 30px;
      }
    }
  }

  @media screen and (max-width: 850px) {
    grid-gap: 14px;

    a > div {
      border-radius: 12px 12px 12px 12px;
      ${ImgWrapperStyles} {
        width: 74%;
      }
      h3 {
        line-height: 120%;
        font-size: 12px;
      }
    }

    a:nth-of-type(1) > div {
      border-radius: 120px 12px 12px 12px;
      h3 {
        margin: 0 30px 40px 30px;
      }
    }

    a:nth-of-type(2) > div,
    a:nth-of-type(5) > div {
      h3 {
        margin-right: 20px;
        margin-bottom: 16px;
      }
    }

    a:nth-of-type(6) > div {
      border-radius: 12px 12px 120px 12px;
      h3 {
        margin: 0 30px 40px 30px;
      }
    }
  }

  @media ${theme.media.mobile} {
    grid-template-columns: repeat(2, minmax(auto, 304px));
    grid-template-rows: repeat(6, minmax(auto, 330px));
    aspect-ratio: 426 / 1404;

    a > div {
      border-radius: 0px;
      h3 {
        font-size: ${font(12, 60)};
        line-height: 160%;
      }
    }

    a:nth-of-type(1) > div {
      border-radius: 30px 30px 0px 0px;
      grid-column: auto / span 2;
      grid-row: auto / span 1;
      aspect-ratio: 636 / 330;

      ${ImgWrapperStyles} {
        width: 54%;
        margin: 0 56px 0 5% !important;
      }

      h3 {
        font-size: ${font(16, 85)};
        margin: 0px 30px 15px 30px;
        text-align: right;
      }
    }

    a:nth-of-type(2) > div,
    a:nth-of-type(5) > div {
      h3 {
        font-size: ${font(16, 85)};
        flex-basis: 75%;
      }
    }

    a:nth-of-type(6) > div {
      border-radius: 0px 0px 30px 30px;
      grid-column: auto / span 2;
      grid-row: auto / span 1;
      aspect-ratio: 636 / 330;
      order: 8;

      ${ImgWrapperStyles} {
        @media ${theme.media.mobile} {
          width: 54%;
        }
      }

      h3 {
        font-size: ${font(16, 85)};
        margin: 0px 30px 15px 30px;
        text-align: right;
      }
    }
  }
`;
