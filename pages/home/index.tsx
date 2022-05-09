import cn from 'classnames';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import React from 'react';

import styles from './_index.module.scss';

export async function getServerSideProps({
  locale
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<Record<string, unknown>>
> {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'common',
        'menu',
        'home'
      ]))
    }
  };
}

const Home = () => {
  return (
    <>
      <NextSeo title="首页" description="欢迎使用Nextjs" />
      <div className={cn(styles.Home, 'container')}>
        欢迎使用nextjs-tailwind-template
      </div>
    </>
  );
};

export default Home;
