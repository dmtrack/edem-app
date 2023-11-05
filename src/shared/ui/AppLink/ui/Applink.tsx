import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Applink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface ApplinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const Applink: FC<ApplinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            className={classNames(styles.Applink, {}, [
                className,
                styles[theme],
            ])}
            to={to}
            {...otherProps}>
            {children}
        </Link>
    );
};
