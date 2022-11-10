import React from 'react';
//import Button from '@mui/material/Button';
import {cx, css} from '@emotion/css';
import { Button } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import {Bell} from 'react-feather';
import Icon from '@mui/material/Icon';
import Avatar from '@mui/material/Avatar';

const appBar = css`
    box-shadow: none !important;
`
const img = css`
    max-height: 55px;
`
const grow = css`
    flex-grow: 1;
`
const userSection = css`
    display: flex;
    align-items: center;
`
const button = css`
    margin-right: 10px !important;
`
const bell = css`
    margin-right: 10px; 
`

function Header() {
    return (
        <AppBar className={cx(appBar)} position='fixed' color='inherit'>
            <Toolbar>
                <img className={cx(img)} src='/images/logo.png' alt='logo'/>
                <div className={cx(grow)}></div>
                <div className={cx(userSection)}>
                    <Button className={cx(button)} variant="contained" color="primary">
                        Novo Post
                    </Button>
                    <Icon className={cx(bell)}>
                        <Bell />
                    </Icon>
                    <Avatar/>
                </div>
            </Toolbar>
        </AppBar>

    )
}

export default Header;


