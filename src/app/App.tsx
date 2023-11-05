import './styles/index.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Suspense } from 'react';
import { Navbar } from '@/widgets';
import { Footer } from '@/widgets/Footer';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <main className='content_page'>
                <AppRouter />
            </main>
            <Footer />
        </div>
    );
};

export default App;
