import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url =
  'https://twitter.us17.list-manage.com/subscribe/post?u=ef3adb934b4e8ebe439f4b1d7&id=cf50f7b61b';

// simplest form (only email)
const Subscribe = () => (
  <div className="subscribe">
    <h2>
      Firefox & Safari support coming soon. Get notified!{' '}
      <span role="img" aria-label="below">
        👇
      </span>{' '}
    </h2>
    <MailchimpSubscribe url={url} />
  </div>
);
export default Subscribe;
