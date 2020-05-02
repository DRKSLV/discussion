import Head from 'next/head'

import { Header } from '../components/layout/Header';
import { PostList } from '../components/PostList';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>HelELo</title>
            </Head>
            <Header></Header>
            <PostList></PostList>
        </div>
    )
}
