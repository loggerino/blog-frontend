import React, { useState, useEffect } from 'react';
import PostCard from './PostCard'; // Create this component

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://blogapi-nine.vercel.app/api/posts/all')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <div className="post-list">
                {posts.map(post => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Home;
