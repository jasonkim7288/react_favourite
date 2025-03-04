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
      <p>{t('Privacy Policy 1')}</p>
      <p>{t('Privacy Policy 2')}</p>
      <h5>{t('Header 1')}</h5>
      <p>{t('Details 1-1')}</p>
      <h5>{t('Header 2')}</h5>
      <p>{t('Details 2-1')}</p>
      <ul>
        <li>{t('Details 2-2')}</li>
        <li>{t('Details 2-3')}</li>
        <li>{t('Details 2-4')}</li>
      </ul>
      <p>{t('Details 2-5')}</p>
      <h5>{t('Header 3')}</h5>
      <p>{t('Details 3-1')}</p>
      <ul>
        <li>{t('Details 3-2')}</li>
        <li>{t('Details 3-3')}</li>
        <li>{t('Details 3-4')}</li>
      </ul>
      <h5>{t('Header 4')}</h5>
      <p>{t('Details 4-1')}</p>
      <p>{t('Details 4-2')}</p>
    </div>
  );
};

export default Privacy;
