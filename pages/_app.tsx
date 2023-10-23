import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Takafumi Miyanaga</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="Takafumi Miyanaga" />
        <meta property="og:description" content="Takafumi Miyanaga's portfolio site" />
        <meta property="og:url" content="https://orangekame3.github.io/" />
        <meta property="og:site_name" content="Takafumi Miyanaga" />
        <meta property="og:type" content="type" />
        <meta property="og:image" content="https://github.com/orangekame3/orangekame3.github.io/blob/master/public/profile.jpg?raw=true" />
        <link rel="shortcut icon" href="https://github.com/orangekame3/orangekame3.github.io/blob/master/public/profile.jpg?raw=true" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
