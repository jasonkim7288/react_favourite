import React from 'react';

const privacyStyles = {
  maxWidth: '800px',
  paddingLeft: '30px',
  paddingRight: '30px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '80px'
}

const Privacy = () => {
  return (
    <div style={privacyStyles}>
      <h3>Privacy Policy</h3>
      <p>We recognize the importance of your privacy, and that you have a right to know how your personal information is collected and used. The Personal Information that we collect are used for providing and improving the app service. We will not use or share your information with anyone except as described in this Privacy Policy. We use google Firebase to collect information for Analytics, Crash report and Adverting. By using Favollect, you agree to this privacy policy.</p>
      <h5>Analytics</h5>
      <p>Anonymous information about how you use Favollect is logged for analytics purpose to gain a better understanding of the general app usage and improve Favollect. The collected data does not include information that can be used to personally identify you, but does include basic information such as the device model you are using, operating system version, locale and how long you spent in each app screen.</p>
      <h5>Crash reports</h5>
      <p>In the case of a crash, a report is generated and transmitted for review. This report includes non-identifiable information such as when the crash occurred, the version of the app and the software stack trace to identify potential issue. We will not see any information personally identify you.</p>
      <h5>Advertising</h5>
      <p className="mb-0">We collect basic information about the display and user clicks of individual ads on device.</p>
      <p>The advertising shown to you is not personalized.</p>
      <h5>Changes to this policy</h5>
      <p>If we decide to change this privacy policy, we will update the Privacy Policy modification date below.</p>

      <p className="mt-5">Last modified 1 Jan, 2021</p>

    </div>
  );
};

export default Privacy;
