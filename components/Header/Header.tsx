import cn from 'classnames';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

import styles from './Header.module.scss';
import { ThemeSwitch } from './ThemeSwitch';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;
  const { t } = useTranslation('common');

  return (
    <header
      className={cn(
        styles.Header,
        className,
        'sticky top-0 z-50 flex items-center justify-between space-x-4 bg-white p-4 text-[#333333] shadow-md',
        'md:px-4',
        'lg:px-12',
        'dark:bg-black'
      )}
    >
      {/* logo area */}
      <div className="flex flex-1 items-center space-x-4">
        {/* 这里如果写根目录，跳转的时候语言会切回中文 */}
        <Link href="/home">
          <span
            className={cn(
              'text-base font-semibold text-stone-800 hover:cursor-pointer',
              'dark:text-white'
            )}
          >
            Header
          </span>
        </Link>
      </div>
      <div className="flex items-center sm:space-x-4">
        <ThemeSwitch />
      </div>
    </header>
  );
}
