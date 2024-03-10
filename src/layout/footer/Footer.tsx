import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styled from 'styled-components';

import creds from '../../assets/data/creds';
import { IconStripe } from '../../assets/IconStripe';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { useMessageTyped } from '../../hooks/useMessage';
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
        <FlexWrapper direction="column" align="center">
          <IconStripe iconId="logo" width="50px" fill={theme.colors.fontShaddy} />
          <div>{creds.company}</div>
          <h4>{t("general information")}</h4>
          <FlexWrapper>
            <div>
              <IconStripe iconId="email" height="21px" width="21px" />
              {creds.email}
            </div>
            <div>
              <IconStripe iconId="phone" height="21px" width="21px" />
              {creds.phone}
            </div>
            <div>
              <IconStripe
                iconId="address"
                height="21px"
                width="21px"
                fill={theme.colors.fontShaddy}
              />
              {creds.address}
            </div>
          </FlexWrapper>
          <h4>{t("we are in messengers")}</h4>
          <FlexWrapper>
            <Link href={creds.tg}>
              <IconStripe iconId="tg" height="30px" width="30px" />
            </Link>
            <Link href={creds.whatsapp}>
              <IconStripe iconId="whatsapp" height="30px" width="30px" />
            </Link>
          </FlexWrapper>
          <div>
            {t("we are available")} {tSys("working hours")}
          </div>
          <h4>{t("interested in a job?")}</h4>
          <div>
            <Link href={creds.linkedin}>
              <IconStripe iconId={"linkedin-alt"} />
            </Link>
          </div>

          <hr />

          <div>{t("navigation")}</div>
          <StyledUl>
            {titles.map((e) => (
              <li key={e}>
                <Link href={`#${e.toLowerCase}`}>{e}</Link>
              </li>
            ))}
          </StyledUl>

          <hr />
          <div>{t("general terms and conditions")}</div>
          <div>
            {t("copyright")} {creds.company}
          </div>
          <div>Design by @sbangl</div>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin-top: 200px;
  min-height: 500px;
  background-color: ${theme.colors.colorPrimeMedium};
  color: ${theme.colors.fontShaddy};

  hr {
    width: 100%;
    border-top: 1px solid ${theme.colors.fontShaddy};
    border-bottom: none;
  }
`;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
`;
