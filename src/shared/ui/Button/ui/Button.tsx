import { classNames } from '@/shared/lib/classNames/classNames';
import style from './Button.module.scss';
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
            className={classNames(style.Button, {}, [className, style[theme]])}
            {...otherProps}
            onClick={onClick}>
            {children}
        </button>
    );
};
