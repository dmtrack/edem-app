import { IRide } from '@/entities/ride/types/types';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './RideCard.module.scss';
import { MapMarker } from '@/shared/assets/icons/mapMarker';
import { Box } from '@/shared/assets/icons/box';
import tripImage from '../../../../../shared/assets/images/tripImage.png';
import { useTranslation } from 'react-i18next';

export interface RideCardProps {
    className?: string;
    ride?: IRide;
}

export const RideCard = ({ className, ride }: RideCardProps) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(styles.RideCard, {}, [className])}>
            <div className={styles.container}>
                <div className={styles.image_section}>
                    <img
                        src={tripImage}
                        alt='tripImage'
                        className={styles.image}
                    />
                </div>{' '}
                <div className={styles.info_section}>
                    <div className={styles.heading}>{t('Газель фермер')}</div>
                    <div className={styles.location_info}>
                        <MapMarker />
                        <div className={styles.location}>
                            {t('Екатеринбург')}
                        </div>
                        <div className={styles.date}>{`26 ${t('сен')}, ${t(
                            'вс'
                        )}`}</div>
                    </div>
                    <div className={styles.cargo_info}>
                        <Box />
                        <div className={styles.cargo_type}>{`${t(
                            'Тип груза'
                        )}: `}</div>
                        <div className={styles.cargo_desc}>
                            {`
                            ${t('Личные вещи')}, ${t('Стройматериалы')}, ${t(
                                'Техника и оборудование'
                            )}
                            ${t('и еще')} 5 ${t('типов')}`}
                        </div>
                    </div>
                </div>{' '}
            </div>
            <div className={styles.price_section}>
                <div className={styles.price_label}>
                    <div className={styles.label}>{`${t('за')} 1 ${t(
                        'час'
                    )}`}</div>
                    <div className={styles.label}>{`${t('от')} 500 ${t(
                        'Р'
                    )}`}</div>
                </div>
            </div>
        </div>
    );
};
