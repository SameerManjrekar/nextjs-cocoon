import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/Layout';

const About = () => {
  let { t } = useTranslation();
  return (
    <Layout>
      <h1>{t('about:about')}</h1>
    </Layout>
  );
};

export default About;
