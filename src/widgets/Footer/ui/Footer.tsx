import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Footer.module.scss';
import { Applink } from '@/shared/ui';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <footer className={classNames(styles.Footer, {}, [className])}>
            <div className={styles.links}>
                {/* <Applink to={'/'} className={cls.mainLink}>
                    Главная
                </Applink>
                <Applink to={'/about'}>О сайте</Applink> */}
            </div>
        </footer>
    );
};
