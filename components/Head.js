import Head from 'next/head';

export default () => (
  <Head>
    <title>ColorGrab | Steal beautiful colors from Dribbble shots easily.</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta charSet="utf-8" />
    {/* <!-- Search Engine --> */}
    <meta name="description" content="Steal Beautiful colors from Dribbble shots easily." />
    <meta name="image" content="https://colorgrab.now.sh/static/screenshot.png" />
    {/* <!-- Schema.org for Google --> */}
    <meta itemProp="name" content="colorgrab.now.sh" />
    <meta itemProp="description" content="Steal Beautiful colors from Dribbble shots easily." />
    <meta itemProp="image" content="https://colorgrab.now.sh/static/screenshot.png" />
    {/* <!-- Twitter --> */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="ColorGrab" />
    <meta name="twitter:description" content="Steal Beautiful colors from Dribbble shots easily." />
    <meta name="twitter:site" content="iamtekeste" />
    <meta name="twitter:image:src" content="https://colorgrab.now.sh/static/screenshot.png" />
    {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
    <meta name="og:title" content="colorgrab.now.sh" />
    <meta name="og:description" content="Steal Beautiful colors from Dribbble shots easily." />
    <meta name="og:image" content="https://colorgrab.now.sh/static/screenshot.png" />
    <meta name="og:url" content="colorgrab.now.sh" />
    <meta name="og:site_name" content="ColorGrab" />
    <meta name="fb:admins" content="1507121833" />
    <meta name="og:type" content="website" />
    <link rel="stylesheet" href="/static/app.css" />
    <link rel="shortcut icon" href="/static/favicon-16x16.png" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-101927033-5" />
    <script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-101927033-6');`
      }}
    />
    <link rel="icon" type="image/png" href="static/images/favicon-16x16.png" sizes="16x16" />
    <link href="https://fonts.googleapis.com/css?family=Overpass:400,600" rel="stylesheet" />
  </Head>
);
