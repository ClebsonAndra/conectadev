import React from "react";
//import { css, cx } from '@emotion/css';
import Paper from '@mui/material/Paper';
import { createTheme} from '@mui/material/styles';
import Button from '@mui/material/Button';
import ListSubheader from "@mui/material/ListSubheader";
import { ListItem, ListItemText } from "@mui/material";


// const root = css`
//     width: 275px;
    
// `

const theme = createTheme({
    paper: {
        width: 275,
        padding: 2,
        marginRight: 16 
    },
    
    button: {
        width: '100%'
    }
});

const tags = [
    {id: 1, name: "reactjs"},
    {id: 2, name: "javascript"},
    {id: 3, name: "dotnet"},
    {id: 4, name: "php"},
    {id: 5, name: "materialdesign"},
    {id: 6, name: "webdev"},
]



function NavBar(){
    return(
    
        <Paper sx={{p: theme.paper.padding, width: theme.paper.width, marginRight: theme.paper.marginRight}}>
            <Button sx={{width: theme.button.width}} variant='outlined' color='secondary'>Registrar grátis</Button>
            <ListSubheader>{'Tags em Alta'}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}/>
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais tags
            </ListItem>
        </Paper>
        
    )
}

export default NavBar;