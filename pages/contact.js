import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/Layout';

const Contact = () => {
  let { t } = useTranslation();
  return (
    <Layout>
      <h1>{t('contact:contact')}</h1>
    </Layout>
  );
};

export default Contact;
