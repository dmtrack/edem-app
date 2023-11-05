import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Footer.module.scss';
import { Applink } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

import appStoreImage from '../../../shared/assets/images/appStore.png';
import googlePlayImage from '../../../shared/assets/images/googlePlay.png';
import { OkIcon } from '../../../shared/assets/icons/socials/okIcon';
import { VkIcon } from '../../../shared/assets/icons/socials/vkIcon';
import { TgIcon } from '../../../shared/assets/icons/socials/tgIcon';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    const { t } = useTranslation('translation');
    return (
        <footer className={classNames(styles.Footer, {}, [className])}>
            <div className={styles.section}>
                <div className={styles.info_panel}>
                    <div className={styles.text_column}>
                        <Applink className={styles.links} to={'/'}>
                            {t('О проекте')}
                        </Applink>
                        <Applink className={styles.links} to={'/'}>
                            {t('Блог')}
                        </Applink>
                        <Applink className={styles.links} to={'/'}>
                            {t('Безопасность')}
                        </Applink>
                    </div>
                    <div className={styles.text_column}>
                        <Applink className={styles.links} to={'/'}>
                            {t('Способы оплаты')}
                        </Applink>
                        <Applink className={styles.links} to={'/'}>
                            {t('Обратная связь')}
                        </Applink>
                        <Applink className={styles.links} to={'/'}>
                            {t('Вопросы и ответы')}
                        </Applink>
                    </div>
                    <div className={styles.text_column}>
                        <Applink className={styles.links} to={'/'}>
                            {t('Автовокзалы России')}
                        </Applink>
                        <Applink className={styles.links} to={'/'}>
                            {t('Автобусные направления')}
                        </Applink>
                        <Applink className={styles.links} to={'/'}>
                            {t('Расписание автобусов')}
                        </Applink>
                    </div>
                    <div className={styles.text_column}>
                        <Applink className={styles.links} to={'/'}>
                            {t('Популярные маршруты')}
                        </Applink>
                        <Applink className={styles.links} to={'/'}>
                            {t('СМИ и Рекламодателям')}
                        </Applink>
                    </div>
                    <div className={styles.stores_columns}>
                        <img
                            src={appStoreImage}
                            alt='appStore'
                            className={styles.stores_image}
                        />{' '}
                        <img
                            src={googlePlayImage}
                            alt='googlePlay'
                            className={styles.stores_image}
                        />
                    </div>
                    <div className={styles.socials}>
                        <VkIcon className={styles.icon} />{' '}
                        <OkIcon className={styles.icon} />{' '}
                        <TgIcon className={styles.icon} />
                    </div>
                </div>
                <div className={styles.bottom_panel}>
                    <span>{t('© 2022 ООО «КОНТЕНТ»')}</span>
                    <span>{t('Политика конфиденциальности')}</span>
                    <span>{t('Пользовательское соглашение')}</span>
                </div>
            </div>
        </footer>
    );
};
