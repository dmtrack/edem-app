import styles from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { LangSwitcherIcon } from '@/shared/assets/icons/langSwitcherIcon';
import { IconWrapper } from './IconWrapper';

export interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <div>
            <LangSwitcherIcon onClick={toggle} className={className} />{' '}
        </div>
    );
};
