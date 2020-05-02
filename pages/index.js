import Head from 'next/head'

import { Header } from '../components/layout/Header';
import { PostList } from '../components/PostList';


export default function Home() {
    return (
        <div>
            <Head>
                <title>HelELo</title>
            </Head>
            <Header></Header>
            <div>
                <PostList></PostList>
            </div>
        </div>
    )
}
