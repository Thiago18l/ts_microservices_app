 import React from 'react';
 import Post from './components/PostCreate';
 import List from './components/PostList';

 export default () => {
     return (
        <div className="container">
            <h1>Create Post</h1>
            <Post />
            <hr/>
            <h1>Posts</h1>
            <List />
        </div>
        );
 };