/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "config/theme";
import createEmotionCache from "config/createEmotionCache";
import "styles/globals.css";
import queryClient from "config/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import App from "next/app";
import { login } from "api/auth";
import { SnackbarProvider } from "notistack";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <CssBaseline />
            <Component {...pageProps} />
            {process.env.NODE_ENV === "development" && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
          </SnackbarProvider>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const result = await login();
  return {
    ...(await App.getInitialProps(appContext)),
    pageProps: {
      user: result.data,
    },
  };
};
