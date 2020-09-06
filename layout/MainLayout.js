import Link from "next/link";
import { Header } from "../components/header/header";
import Head from "next/head";

export function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet"></link>
      </Head>

      <Header></Header>
      <main>{children}</main>
    </>
  );
}
