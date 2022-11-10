import React from 'react';
import { Card, CardHeader, CardActions, CardContent, CardActionArea} from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { css, cx } from '@emotion/css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';


const img = css`
    height: 300px;
    max-width: 100%;
    width: 100%
`

const theme = createTheme({
    card: {
        marginBottom: "16px"
    },
    subheader: {
        display: "flex",
        alignItems: "center"
    },
    caption: {
        marginRight: "8px"
    },
    message: {
        height: "auto",
        marginBottom: "16px",
        padding: "0 24px"
    },
    content: {
        padding: 0
    },
    favorite: {
        marginLeft: "auto"
    },
    reactions: {

    }

});

function PostCard({ post }) {
    return (
        
            <Card sx={{mb:theme.card.marginBottom}}>
                <CardHeader 
                avatar={<Avatar src={post.author.avatar}/>} 
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <Box sx={{display:theme.subheader.display, alignItems:theme.subheader.alignItems}}>
                        <Typography variant="caption" sx={{marginRight: theme.caption.marginRight}}>
                            {"Avaliado por"}
                        </Typography>
                        <Typography variant="subtitle2" sx={{marginRight: theme.caption.marginRight}}>
                            {post.author.name}
                        </Typography>
                        <Typography variant="caption" sx={{marginRight: theme.caption.marginRight}}>
                            {post.date}
                        </Typography>
                    </Box>
                }
                />
                <CardContent sx={{p: theme.content.padding}}>
                    <Typography sx={{mb: theme.message.marginBottom, height: theme.message.height, p: theme.message.padding}} variant="body1">
                    {post.hashtags}
                    </Typography>
                    <CardActionArea>
                        <img src={post.image} alt="img" className={cx(img)}/>
                    </CardActionArea>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label='like'>
                        <FavoriteIcon/>
                        <Typography style={{cursor: "pointer"}} color="textSecondary" variant="body2"> 
                            {10}
                        </Typography>


                    </IconButton>
                    <IconButton aria-label='comment'>
                        <MessageIcon/>
                        <Typography color="textSecondary" variant="body2"> 
                            {'30'}
                        </Typography>
                        

                    </IconButton>

                    <IconButton aria-label='favorite' sx={{ml: theme.favorite.marginLeft}} >
                        <BookmarkIcon/>

                    </IconButton>
                </CardActions>
            </Card>
       

    )
}

export default PostCard;