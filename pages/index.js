import Head from 'next/head'

import { Header, HeaderButton } from '../components/layout/Header';
import { Container } from '../components/layout/Container';
import { PostList } from '../components/PostList';


export default function Home() {
    return (
        <div>
            <Head>
                <title>Huansohn</title>
            </Head>

            <Header>
                <HeaderButton icon={"⚙"}></HeaderButton>
            </Header>
            <Container>
                <PostList></PostList>
            </Container>
        </div>
    )
}
