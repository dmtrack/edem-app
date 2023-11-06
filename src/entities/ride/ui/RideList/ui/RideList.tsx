import { useRides } from '@/entities/ride/lib/useRides';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import { RideCard } from '../../RideCard';
import styles from './RideList.module.scss';
import 'react-toastify/scss/main.scss';

export interface RideListProps {
    className?: string;
}

export const RideList = ({ className }: RideListProps) => {
    const { t } = useTranslation('translation');
    const [pageNum, setPageNum] = useState(1);
    let limit;

    if (pageNum === 1) {
        limit = 30;
    } else if (pageNum === 2) {
        limit = 10;
        setPageNum(4);
    }
    const {
        results: data,
        isLoading,
        isError,
        hasNextPage,
    } = useRides(pageNum, limit);

    let intObserver = useRef<IntersectionObserver | null>(null);

    const lastPostRef = useCallback(
        (ride) => {
            if (isLoading) return;
            if (intObserver.current) intObserver.current.disconnect();
            intObserver.current = new IntersectionObserver((rides) => {
                if (rides[0].isIntersecting && hasNextPage) {
                    console.log('near thee last');
                    setPageNum((prev) => prev + 1);
                }
            });
            if (ride) intObserver.current.observe(ride);
        },
        [isLoading, hasNextPage]
    );

    useEffect(() => {
        if (data.length === 100) toast(`${t('поездок больше не найдено')}`);
    }, [data.length, lastPostRef]);

    const content = data.map((ride, i) => {
        if (data.length === i + 1 && data.length < 100) {
            return <RideCard ref={lastPostRef} key={ride.id} ride={ride} />;
        }
        return <RideCard key={ride.id} ride={ride} />;
    });

    return (
        <>
            {isError && <p className='center'>Error occured...</p>}
            {isLoading && <p className='center'>Loading more rides...</p>}
            {
                <div>
                    <div
                        className={classNames(styles.ride_counter, {}, [
                            className,
                        ])}>
                        {`${t('Найдено')}: ${data.length} ${t(
                            'грузоперевозка'
                        )}`}
                    </div>
                    <div
                        className={classNames(styles.RideList, {}, [
                            className,
                        ])}>
                        {content}
                    </div>

                    <ToastContainer
                        position='bottom-right'
                        autoClose={3000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme='light'
                        className={styles.toast}
                    />
                </div>
            }
        </>
    );
};
