import Script from 'next/script';

export const FetchPreloader = () => (
  // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
  <Script
    id="show-users"
    rel="preload"
    src="/api/users"
    crossOrigin="anonymous"
    strategy="beforeInteractive"
  />
);
