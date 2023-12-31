import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-tailwind/react';
import App from '~/app/App';
import { store } from '~/app/store';
import GlobalStyles from '~/components/GlobalStyles';
import reportWebVitals from '~/reportWebVitals';
import '~/index.css';

const { worker } = require('~/mocks/browser');
const root = ReactDOM.createRoot(document.getElementById('root'));
worker.start();

if (process.env.NODE_ENV === 'development') {
    require('./mocks/browser');
}

root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Provider store={store}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </Provider>
        </GlobalStyles>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
