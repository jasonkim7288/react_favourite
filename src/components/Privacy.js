import React from 'react';
import { useTranslation } from 'react-i18next';

const privacyStyles = {
  maxWidth: '800px',
  paddingLeft: '30px',
  paddingRight: '30px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '60px'
}

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <div style={privacyStyles}>
      <h3>{t('Privacy Policy')}</h3>
      <p>{t('Privacy Policy main description')}</p>
      <h5>{t('Analytics')}</h5>
      <p>{t('Analytics description')}</p>
      <h5>{t('Crash reports')}</h5>
      <p>{t('Crash reports description')}</p>
      {/* <h5>{t('Advertising')}</h5>
      <p>{t('Advertising description')}</p> */}
      <h5>{t('Changes to this policy')}</h5>
      <p>{t('Changes to this policy description')}</p>
      <p className="mt-5">{t('Last modified with the date')}</p>
    </div>
  );
};

export default Privacy;
