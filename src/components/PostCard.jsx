import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
    return (
        <div className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/posts/post/${post._id}`}>
                <button>Read More</button>
            </Link>
        </div>
    );
}

export default PostCard;
