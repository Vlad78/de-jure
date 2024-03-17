import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import creds from '../../assets/data/creds';
import { IconStripe } from '../../assets/IconStripe';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Menu } from '../../components/Menu';
import { useMessageTyped } from '../../hooks/useMessage';
import { font } from '../../styles/FontSize';
import { theme } from '../../styles/Theme';


export const Footer = () => {
  const t = useTranslations("footer");
  const tSys = useTranslations("system");
  const messages = useMessageTyped();
  const keys = Object.keys(messages);

  const titles = keys.reduce((results: string[], e) => {
    // @ts-ignore
    if ("title" in messages[e as keyof IntlMessages]) results.push(messages[e].title);
    return results;
  }, []);

  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction="column" align="center" margin="73px 105px">
          <IconStripe iconId="logo" width="50px" fill={theme.colors.fontShaddy} />
          <div className="company">{creds.company}</div>

          <h4>{t("general information")}</h4>
          <FlexWrapper margin="40px 0 0 0" gap="40px" className="flex-1">
            <Menu icons="gray" />
          </FlexWrapper>

          <h4>{t("we are in messengers")}</h4>
          <FlexWrapper margin="30px 0 0 0" gap="63px" className="flex-2">
            <a href={creds.tg}>
              <IconStripe iconId="tg" height="30px" width="30px" />
            </a>
            <a href={creds.whatsapp}>
              <IconStripe iconId="whatsapp" height="30px" width="30px" />
            </a>
          </FlexWrapper>
          <div className="business-hours">
            {t("we are available")} {tSys("working hours")}
          </div>

          <h4>{t("interested in a job?")}</h4>
          <div className="job">
            <a href={creds.linkedin}>
              <IconStripe iconId={"linkedin-alt"} />
            </a>
          </div>

          <hr />

          <h4>{t("navigation")}</h4>
          <StyledUl>
            {titles.map((e) => (
              <li key={e}>
                <a href={`#${e.replaceAll(" ", "_")}`}>{e}</a>
              </li>
            ))}
          </StyledUl>

          <hr />
          <div className="terms">{t("general terms and conditions")}</div>
          <div className="copyright">
            {t("copyright")} {creds.company}
          </div>
          <div className="design">Design by @sbangl</div>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledUl = styled.ul`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  row-gap: 35px;
  column-gap: 35px;
  justify-items: start;
  text-align: left;
`;

const StyledFooter = styled.footer`
  margin-top: 200px;
  min-height: 500px;
  position: relative;
  background-color: ${theme.colors.colorPrimeMedium};
  color: ${theme.colors.fontShaddy};
  border: 1px solid #fff0;
  z-index: 1;

  .company {
    margin-top: 10px;
    white-space: nowrap;
  }

  h4 {
    margin-top: 80px;
    font-size: ${font(16, 24)};
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.01em;
  }

  .business-hours {
    margin-top: 80px;
    max-width: 380px;
    font-size: ${font(16, 24)};
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.01em;
  }

  .job {
    margin-top: 40px;
  }

  hr {
    margin-top: 80px;
    width: 100%;
    border-top: 1px solid ${theme.colors.fontShaddy};
    border-bottom: none;
  }

  .terms {
    margin-top: 40px;
  }

  .copyright {
    margin-top: 80px;
  }

  .design {
    margin-top: 100px;
  }

  @media ${theme.media.tablet} {
    ${Container} > ${FlexWrapper}:nth-child(1) {
      margin: 73px 85px;
      .flex-1 {
        margin-top: 46px;
        flex-direction: column;
        gap: 40px;

        ${FlexWrapper} {
          justify-content: center;
        }
      }
    }
  }

  @media ${theme.media.mobile} {
    margin-top: 100px;

    ${Container} > ${FlexWrapper}:nth-child(1) {
      margin: 42px 30px;

      h4 {
        font-size: 20px;
        margin-top: 50px;
      }

      .flex-1 {
        margin-top: 46px;
        flex-direction: column;
        gap: 40px;

        ${FlexWrapper} {
          justify-content: center;
          div {
            white-space: normal;
          }
        }
      }

      .business-hours {
        margin-top: 50px;
        font-size: 20px;
      }

      .job {
        margin-top: 46px;
      }

      hr {
        margin-top: 44.5px;
        width: 100vw;
      }

      ${StyledUl} {
        min-height: unset;
        margin-top: 37px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-auto-flow: row;
        align-items: center;
        column-gap: 68px;
        margin-bottom: 20px;
      }

      .terms {
        margin-top: 19px;
      }
    }
  }
`;
