import Head from 'next/head'

import { Header, HeaderButton } from '../components/layout/Header';
import { Container } from '../components/layout/Container';
import { PostList } from '../components/PostList';

import { MdSettings as SettingsIcon } from "react-icons/md";
import { FaUser as UserIcon, FaPlus as PlusIcon } from "react-icons/fa";


export default function Home() {
    return (
        <div>
            <Head>
                <title>Huansohn</title>
            </Head>

            <Header>
                <HeaderButton icon={<PlusIcon/>}></HeaderButton>
                <HeaderButton icon={<UserIcon/>}></HeaderButton>
                <HeaderButton icon={<SettingsIcon/>}></HeaderButton>
            </Header>
            <Container>
                <PostList></PostList>
            </Container>
        </div>
    )
}
