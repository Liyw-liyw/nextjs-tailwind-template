import { Checkbox, STYLE_TYPE } from 'baseui/checkbox';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { useSize } from '@/utils/hooks/useSize';

import styles from './ThemeSwitch.module.scss';

interface ThemeSwitchProps {
  className?: string;
}

export function ThemeSwitch(props: ThemeSwitchProps) {
  const { className } = props;
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === 'dark');
  const { t } = useTranslation('menu');
  const { isMobile } = useSize();

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  return (
    <div
      className={cn(
        styles.ThemeSwitch,
        className,
        isMobile ? 'absolute bottom-16 right-4' : ''
      )}
    >
      <Checkbox
        checked={isDark}
        onChange={(e) => {
          // setIsDark(e.currentTarget.checked);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          setTheme(e.currentTarget.checked ? 'dark' : 'light');
        }}
        checkmarkType={STYLE_TYPE.toggle_round}
        overrides={
          isDark
            ? {
                Toggle: {
                  style: () => ({
                    backgroundColor: 'white'
                  })
                },
                ToggleTrack: {
                  style: () => ({
                    backgroundColor: '#00aaff'
                  })
                }
              }
            : {}
        }
      >
        <span className={cn('text-black', isMobile ? '' : 'dark:text-white')}>
          {t('MENU_USER_THEME')}
        </span>
      </Checkbox>
    </div>
  );
}
