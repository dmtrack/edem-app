import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import './shared/config/i18n/i18n';
import { ReduxProvider } from './app/redux/provider';

render(
    <BrowserRouter>
        <ReduxProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ReduxProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
