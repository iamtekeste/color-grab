import Head from '../components/Head';
import Share from '../components/Share';

export default () => (
  <div className="container">
    <Head />
    <nav>
      <div className="logo">
        <a href="/">
          <h1>ColorGrab</h1>
        </a>
        <div className="by">
          by<a href="https://twitter.com/iamtekeste">@iamtekeste</a>
        </div>
      </div>
      <div className="menu">
        <Share
          url="https://colorgrab.now.sh/"
          shareText="Steal Beautiful colors from Dribbble shots easily."
        />
      </div>
    </nav>
    <div className="hero">
      <div className="tagline">
        <div>Steal Beautiful colors from Dribbble shots easily.</div>
        <a href="https://chrome.google.com/webstore/detail/color-grab/aiamoeimgpbjfhmagepggjdickchgpfd?utm_source=chrome-ntp-icon">
          <img src="../static/chrome.png" alt="Chrome Icon" />
          <span>Add to Chrome</span>
        </a>
      </div>
      <div className="demo">
        <iframe
          title="Demo video"
          src="https://www.youtube.com/embed/BOXkfMNoMZA?rel=0&amp;controls=0&amp;showinfo=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  </div>
);
