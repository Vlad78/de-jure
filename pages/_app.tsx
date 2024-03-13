import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { Inria_Serif } from "next/font/google";
import { useRouter } from "next/router";
import { relative } from "path";
import { ThemeProvider } from "styled-components";

import en from "../i18n/en.json";
import pl from "../i18n/pl.json";
import ru from "../i18n/ru.json";
import { GlobalStyle } from "../src/styles/Global.styled";
import { theme } from "../src/styles/Theme";

const inria = Inria_Serif({ weight: ["300", "400", "700"], subsets: ["latin"] });

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
  const locale = route.locale as unknown as keyof typeof dictionary;
  // const [messages, setMessages] = useState<Localization | undefined>();

  // useEffect(() => {
  //   (async () => {
  //     const dict = await dictionary[locale]();
  //     console.log("dict:", dict);
  //     setMessages(dict);
  //   })();
  // }, [locale]);

  return (
    <NextIntlClientProvider locale={locale} messages={dictionary[locale]}>
      <ThemeProvider theme={theme}>
        <main className={inria.className} style={{ position: "relative" }}>
          <GlobalStyle />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
export default App;
