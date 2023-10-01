'use client';
import { store } from '@/app/store';
import { AppPropsWithLayout } from '@/models/common';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    return (
        <Provider store={store}>
            <SnackbarProvider autoHideDuration={2500} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
                <Component {...pageProps} />
            </SnackbarProvider>
        </Provider>
    );
}

export default MyApp;
