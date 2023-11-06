import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './RideCounter.module.scss';

export interface RideCounterProps {
    className?: string;
}

export const RideCounter = ({ className }: RideCounterProps) => {
    const { t } = useTranslation('translation');

    return (
        <div className={classNames(styles.RideCounter, {}, [className])}>
            {`${t('Найдено')}: 1 ${t('грузоперевозка')}`}
        </div>
    );
};
