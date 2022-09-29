import { ThemeProvider } from "@mui/material";
import i18next from "i18next";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import "../styles/globals.scss";
import theme from "../theme";
import enLang from "../translates/en/index.json";
import esLang from "../translates/es/index.json";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store";

i18next.init({
  lng: "en",
  resources: {
    en: {
      index: enLang,
    },
    es: {
      index: esLang,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18next}>
          <Component {...pageProps} />
        </I18nextProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default MyApp;
