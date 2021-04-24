import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/Layout';

const Services = () => {
  let { t } = useTranslation();
  return (
    <Layout>
      <h1>{t('services:services')}</h1>
    </Layout>
  );
};

export default Services;
