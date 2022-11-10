import React from 'react';
//import './style.css';
import Header from './components/Header';
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import { css, cx } from '@emotion/css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const root = css`
    display: flex;
    flex-direction: collumn
`

const main = css`
    height: 100vh;
    padding: 24px;
    margin-top: 50px;
`
const toolbar = css`
    min-height: 64;
`

function Home() {


    return (
        <div className={cx(root)}>
            <Header />
            <div className={cx(toolbar)}></div>
            <main className={cx(main)}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>
                
            </main>
        </div>
    );
}

export default Home;