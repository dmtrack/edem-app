import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { Applink } from '@/shared/ui';
import { LangSwitcher, ThemeSwitcher } from '@/widgets';
import logoImage from '../../../shared/assets/images/logo.png';
import userImage from '../../../shared/assets/images/user.png';
import { ChatBubbleIcon } from '@/shared/assets/icons/chatBubbleIcon';
import { RoundNotificationsIcon } from '@/shared/assets/icons/roundNotificationsIcon';
import { useTranslation } from 'react-i18next';
import { IconWrapper } from '@/widgets/LangSwitcher/ui/IconWrapper';

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation');
    return (
        <header className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.section}>
                <div className={styles.banner}>
                    <img className={styles.logo} src={logoImage} />
                    <div className={styles.typo}>
                        <span>{t('слоган1часть')}</span>
                        <br />
                        <span>{t('слоган2часть')}</span>
                    </div>
                </div>
                <div className={styles.control_panel}>
                    <LangSwitcher className={styles.lang} />
                    <ChatBubbleIcon className={styles.chat} />
                    <div className={styles.notif}>
                        <RoundNotificationsIcon className={styles.bell} />
                        <div className={styles.label}>
                            <span className={styles.count}>54</span>
                        </div>
                    </div>
                    <div className={styles.chip}>
                        <img
                            className={styles.image}
                            src={userImage}
                            alt='user'
                        />
                        <div className={styles.user}> Оксана</div>
                    </div>
                    {/* <Applink to={'/'} className={styles.mainLink}>
                    Главная
                </Applink>
                <Applink to={'/about'}>О сайте</Applink> */}
                    {/* <ThemeSwitcher /> */}
                </div>
            </div>
        </header>
    );
};
