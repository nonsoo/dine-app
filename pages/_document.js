import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href={`https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap`}
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="theme-color"
          content="hsl(0, 0%, 8%)"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="hsl(270, 17%, 98%)"
          media="(prefers-color-scheme: light)"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
