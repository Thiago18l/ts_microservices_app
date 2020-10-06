import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IPost {
    id: string | number;
    title: string;
}
interface Props {
    posts: {
        id: string | number;
        title: string;
    }
}

export default () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:8080/posts');
        setPosts(response.data);
    }

    useEffect(() => {
        fetchPosts();
    }, [posts])

    const renderedPost = Object.values(posts).map((post: any): JSX.Element => {

        return (
            <div className="card"
                style={{
                    width: '30%',
                    marginBottom: '20px'
                }}
                key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>
                </div>
            </div>
        )
    });
    return (
        <div className="
            d-flex 
            flex-row
            flex-wrap 
            justify-content-between
        ">
            {renderedPost};
        </div>
    )
}