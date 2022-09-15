import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
//=================================================================
import { UiProvider } from "../context/ui-context";
import Layout from "../components/layout/Layout";
import MenuPopup from "../components/menu/MenuPopup";
//=================================================================
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>Eatary</title>
        <meta
          name="description"
          content="This is a desription for My Next App"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UiProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
            <MenuPopup />
          </Layout>
        </QueryClientProvider>
      </UiProvider>
    </>
  );
}

export default MyApp;
