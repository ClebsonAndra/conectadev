import React from 'react';
import PostCard from '../../../components/PostCard';

const posts = [
    {
        id: 1,
        author:{
            id: 1,
            name: 'Clebson Andrade',
            username: 'clebsonandra',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Criando app",
        date: "April 7, 2020",
        description: 'Fala ai pessoal',
        hashtags: '#dotnet, #javascript',
        image: "/images/posts/post1.png"
    },
    {
        id: 2,
        author:{
            id: 1,
            name: 'Clebson Andrade',
            username: 'clebsonandra',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Criando app",
        date: "April 7, 2020",
        description: 'Fala ai pessoal',
        hashtags: '#dotnet, #javascript',
        image: "/images/posts/post1.png"
    },
    
]

function Feed(){
    return (
        <div>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))
            }
            
        </div>
    )
}

export default Feed;