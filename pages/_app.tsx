import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { Inria_Serif, Spectral } from "next/font/google";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";

import { SpeedInsights } from "@vercel/speed-insights/next";

import en from "../i18n/en.json";
import pl from "../i18n/pl.json";
import ru from "../i18n/ru.json";
import { GlobalStyle } from "../src/styles/Global.styled";
import { theme } from "../src/styles/Theme";

const inria = Inria_Serif({ weight: ["300", "400", "700"], subsets: ["latin"] });
const spect = Spectral({ weight: ["300", "400", "600"], subsets: ["cyrillic"] });

// TODO dynamic import
// const dictionary = {
//   en: () => import("../i18n/en.json").then((module) => module.default),
//   pl: () => import("../i18n/pl.json").then((module) => module.default),
//   ru: () => import("../i18n/ru.json").then((module) => module.default),
// };

// type Localization = Awaited<ReturnType<typeof dictionary.en>>;

const dictionary = {
  en,
  pl,
  ru,
};

const defaultTranslationValues = {
  div: (chunks: ReactNode) => `<div>${chunks}</div>`,
  p: (chunks: ReactNode) => `<p>${chunks}</p>`,
  strong: (chunks: ReactNode) => `<strong>${chunks}</strong>`,
  ul: (chunks: ReactNode) => `<ul>${chunks}</ul>`,
  ol: (chunks: ReactNode) => `<ol>${chunks}</ol>`,
  li: (chunks: ReactNode) => `<li>${chunks}</li>`,
};

function App({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const locale = route.locale;
  // const [messages, setMessages] = useState<Localization | undefined>();

  // useEffect(() => {
  //   (async () => {
  //     const dict = await dictionary[locale]();
  //     console.log("dict:", dict);
  //     setMessages(dict);
  //   })();
  // }, [locale]);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={dictionary[locale]}
      timeZone={"Europe/Warsaw"}
      defaultTranslationValues={defaultTranslationValues}
    >
      <ThemeProvider theme={theme}>
        <StyledMain className={locale === "ru" ? spect.className : inria.className}>
          <GlobalStyle />
          <Component {...pageProps} />
        </StyledMain>
        <SpeedInsights />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
export default App;

const StyledMain = styled.main`
  position: relative;

  &.${spect.className} {
    letter-spacing: -0.02em;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      letter-spacing: -0.02em;
    }
  }

  &.${inria.className} {
  }
`;
