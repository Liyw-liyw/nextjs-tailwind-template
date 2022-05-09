import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/globals.css';

import { BaseProvider } from 'baseui';
import { PLACEMENT, ToasterContainer } from 'baseui/toast';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as StyletronProvider } from 'styletron-react';

import { Layout } from '@/components/Layout';
import { theme } from '@/styles/baseuiTheme';
import { styletron } from '@/styletron';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider
      attribute="class"
      themes={['light', 'dark']}
      enableSystem={false}
    >
      <StyletronProvider value={styletron}>
        <BaseProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Layout>
              {/* <ScrollToTop /> */}
              <ToasterContainer
                placement={PLACEMENT.bottomRight}
                autoHideDuration={3000}
              />
              <Component {...pageProps} />
            </Layout>
          </QueryClientProvider>
        </BaseProvider>
      </StyletronProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
