import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://blogapi-nine.vercel.app/api/posts/all')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map(post => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Home;
