import { classNames } from '@/shared/lib/classNames/classNames';
import { IRide } from '../../../types/types';
import { RideCard } from '../../RideCard';
import styles from './RideList.module.scss';

export interface RideListProps {
    className?: string;
    rides?: IRide[];
}

export const RideList = ({ className, rides }: RideListProps) => {
    return (
        <div className={classNames(styles.RideList, {}, [className])}>
            <RideCard />
            <RideCard />
        </div>
    );
};
