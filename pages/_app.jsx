import React, { useEffect } from 'react';
import ReduxLayout from 'components/ReduxLayout';
import request, { requestMonitor } from 'services/request';
import { ThemeProvider } from '@emotion/react';
import { ConfigProvider } from 'antd';
import theme from 'components/theme';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';
import 'swiper/css/thumbs';
import 'public/static/css/public.css';
import 'public/static/css/mlbs-icon.css';
import 'antd/dist/antd.css';
import 'public/static/css/antd-rtl-431.css';
import 'public/static/css/LatoLatin.css';
import * as minio from 'minio';
import { I18nextProvider } from 'react-i18next';
import i18n from 'components/i18n';
import { ApolloProvider } from '@apollo/client';
import client from 'components/appollo-client';
import { AuthModalProvider } from 'contexts/AuthModalContext';

// Sentry.init({
//   dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
//   enabled: true,
//   environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
// });

export const minioClient = new minio.Client({
  endPoint: 'oss.blytd.com',
  accessKey: 'WopooShoop1vich1',
  secretKey: 'Ajoob6oophu6ahTh1eethiekan1ahva7',
  // port: 9000,
  // useSSL: true,
});

const MLBSApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!request.monitors.length) {
      request.addMonitor(requestMonitor);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <ConfigProvider direction="ltr">
          <ApolloProvider client={client}>
            <ReduxLayout>
              <AuthModalProvider>
                <Component {...pageProps} />
              </AuthModalProvider>
            </ReduxLayout>
          </ApolloProvider>
        </ConfigProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default MLBSApp;
