import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import CommentForm from './CommentForm';

function PostDetail() {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/post/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching post:', error));
    }, [id]);

    if (!post) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                >
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >
                        Loading...
                    </span>
                </div>
            </div>
        );
    }

    const date = new Date(post.timestamp).toLocaleDateString();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mt-4">{post.title}</h1>
            <div className="mt-2 text-sm text-gray-500">
                <ul className="mt-2 flex space-x-2">
                    {post.tag.map(tag => (
                        <li key={tag} className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700">{tag}</li>
                    ))}
                </ul>
                By {post.user.username} on {date}
            </div>
            <div className="mt-6 text-lg text-gray-700">{post.content}</div>
            <div className="mt-6">
                <h2 className="text-xl font-bold text-gray-900">Tags</h2>
            </div>
            <div className="mt-6">
                <CommentSection comments={post.comments} />
                <CommentForm postId={id} />
            </div>
        </div>
    );
}

export default PostDetail;
