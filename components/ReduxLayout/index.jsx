import React from 'react';
import Head from 'next/head';
import { withRedux } from 'store/with-redux-store';

const ReduxLayout = ({ children }) => {
    return (
        <>
            <Head>
                <meta httpEquiv="content-language" />
            </Head>
            {children}
        </>
    );
};

export default withRedux(ReduxLayout);
