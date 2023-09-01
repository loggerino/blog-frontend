import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://blogapi-nine.vercel.app/api/posts/post/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching post:', error));
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {/* Render comment section and comment form */}
        </div>
    );
}

export default PostDetail;
