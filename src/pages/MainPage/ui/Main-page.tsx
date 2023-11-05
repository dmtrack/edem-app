import { RideCounter, RideList } from '@/entities/ride';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    return (
        <>
            {' '}
            <RideCounter />
            <RideList />
        </>
    );
};

export default MainPage;
