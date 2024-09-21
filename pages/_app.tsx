import type { AppProps } from 'next/app';
import { LazyMotion } from 'framer-motion';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import '../styles/globals.css';
import '../styles/icons.css';
import { Lato } from '@next/font/google';
import { useRef } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const lato = Lato({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lato',
  weight: '400'
});

const loadFeatures = () =>
  import('lib/helpers/framer').then((res) => res.default);

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retryOnMount: false,
          staleTime: 60 * 60 * 1000
        }
      }
    })
  );
  return (
    // <div className={`${montserrat.variable} flex flex-col min-h-screen`}>
    <div className={`${lato.variable} flex flex-col min-h-screen`}>
      <LazyMotion features={loadFeatures} strict>
        <QueryClientProvider client={queryClient.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </LazyMotion>
    </div>
  );
};

export default App;
