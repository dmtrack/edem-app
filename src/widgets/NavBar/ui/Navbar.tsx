import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Applink } from '@/shared/ui';

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Applink to={'/'} className={cls.mainLink}>
                    Главная
                </Applink>
                <Applink to={'/about'}>О сайте</Applink>
            </div>
        </div>
    );
};
