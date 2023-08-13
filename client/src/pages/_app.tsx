import '../styles/globals.css';
// import axiosClient from '@/ApiClient/axiosClient';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persisitor, store } from '@/app/store';
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persisitor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}

export default MyApp;