import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      const lang = url.split('/')[1];
      i18n.changeLanguage(lang).catch((err) => {
        console.error('Error changing language', err);
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const { Component } = appContext;
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(appContext);
  }

  return {
    pageProps,
  };
};

export default appWithTranslation(MyApp);