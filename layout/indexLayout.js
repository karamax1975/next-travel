import Link from "next/link";
import { Header } from "../components/header/header";
import Head from "next/head";
import {IndexHeader} from '../components/header/indexHeader';

// import {IndexHeader} from "../components/header/indexHeader";

export default function IndexLayout({children, title, data}) {


    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet"></link>
            </Head>
            <IndexHeader title={title} data={data}/>
            <main>{children}</main>
        </>
    )
}