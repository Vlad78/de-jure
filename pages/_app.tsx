import type { AppProps } from "next/app";
import { NextIntlClientProvider } from 'next-intl';
import { getRequestConfig, getTimeZone } from 'next-intl/server';
import { Inria_Serif, Spectral } from 'next/font/google';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import { SpeedInsights } from '@vercel/speed-insights/next';

import en from '../i18n/en.json';
import pl from '../i18n/pl.json';
import ru from '../i18n/ru.json';
import { GlobalStyle } from '../src/styles/Global.styled';
import { theme } from '../src/styles/Theme';


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
    >
      <ThemeProvider theme={theme}>
        <main
          className={locale === "ru" ? spect.className : inria.className}
          style={{ position: "relative" }}
        >
          <GlobalStyle />
          <Component {...pageProps} />
        </main>
        <SpeedInsights />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
export default App;
