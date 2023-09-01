import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
                <h2 className="text-lg font-medium text-gray-900 truncate">{post.title}</h2>
                <p className="mt-1 text-sm text-gray-500">{post.content}</p>
            </div>
            <div className="border-t border-gray-200 p-5">
                <Link to={`/posts/post/${post._id}`}>
                    <button className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Read More</button>
                </Link>
            </div>
        </div>
    );
}

export default PostCard;
