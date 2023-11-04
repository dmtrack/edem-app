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
            <Suspense fallback=''>
                <Navbar />
                <main className='content_page'>
                    {/* <SideBar /> */}
                    <AppRouter />
                </main>
                <Footer />
            </Suspense>
        </div>
    );
};

export default App;
