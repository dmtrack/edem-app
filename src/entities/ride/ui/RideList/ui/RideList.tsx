import { RideCounter } from '@/entities/ride';
import { useRides } from '@/entities/ride/lib/useRides';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RideCard } from '../../RideCard';
import styles from './RideList.module.scss';

export interface RideListProps {
    className?: string;
}

export const RideList = ({ className }: RideListProps) => {
    const { t } = useTranslation('translation');

    const [pageNum, setPageNum] = useState(1);
    const {
        results: data,
        isLoading,
        isError,
        hasNextPage,
    } = useRides(pageNum);
    console.log(data, 'data');
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

    const content = data.map((ride, i) => {
        if (data.length === i + 1 && data.length < 30) {
            return <RideCard ref={lastPostRef} key={ride.id} ride={ride} />;
        }
        return <RideCard key={ride.id} ride={ride} />;
    });

    return (
        <>
            {isError && <p className='center'>Error occured...</p>}
            {isLoading && <p className='center'>Loading more posts...</p>}
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
                </div>
            }
        </>
    );
};
