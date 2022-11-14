import React from "react";
import {css, cx} from "@emotion/css";
import Typography from "@mui/material/Typography";

const root = css `
    display: flex;
    flex-direction: row;
    height: 100vh
`

const left = css `
    background-color: blue;
    flex-basis: 58%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center 
`
const right = css `
    background-color: yellow;
    flex-basis: 42%
`
const form = css `
    display: flex;
    flex-direction: column;
    margin: 64px 32px;
    align-items: center
`

function SignIn() {
    return (
        /*Flex container*/
        <div className={cx(root)}>
            {/* Flex item container*/}
            <div className={cx(left)}>
                <Typography style={{color: '#fff', fontSize: 25, lineHeight: '45px'}}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software</strong>
                </Typography>
                <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software
                </Typography>
            </div>

            <div className={cx(right)}>
                <form className={cx(form)}>
                <h4>Acesso</h4>
                <input type="text"></input>
                <input type="text"></input>
                </form>
            </div>
        </div>
    )
}

export default SignIn