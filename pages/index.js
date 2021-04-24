import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/Layout';

export default function Home({ greeting }) {
  let { t } = useTranslation();

  return (
    <Layout>
      <h1>{t('common:greeting')}</h1>
    </Layout>
  );
}
