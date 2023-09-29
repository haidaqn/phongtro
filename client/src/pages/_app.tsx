import '../styles/globals.css';
import { store } from '@/app/store';
import { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <SnackbarProvider autoHideDuration={2500} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
                <Component {...pageProps} />
            </SnackbarProvider>
        </Provider>
    );
}

export default MyApp;
