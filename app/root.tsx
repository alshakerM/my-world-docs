import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Header } from './components/Header/Header';
import { Homepage } from './components/Homepage/Homepage';
import styles from './root.module.css';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={styles.body}>
        <Header />
        <Homepage />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
