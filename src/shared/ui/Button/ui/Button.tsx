import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { onClick, className, children, theme, ...otherProps } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
            onClick={onClick}>
            {children}
        </button>
    );
};
