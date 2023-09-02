import React, { useState } from 'react';
import CommentForm from './CommentForm';

function CommentSection({ postId, initialComments }) {
    const [comments, setComments] = useState(initialComments);

    const handleNewComment = comment => {
        setComments(comments => [...comments, comment]);
    };

    return (
        <div className="comment-section">
            <h3 className="text-lg font-medium text-gray-900">Comments</h3>
            <ul className="mt-4 space-y-4">
                {comments.map(comment => {
                    console.log(comment.user.username);
                    const date = new Date(comment.timestamp).toLocaleDateString();
                    return (
                        <li key={comment._id} className="bg-gray-50 rounded-md p-4">
                            <p className="text-sm text-gray-700">{comment.content}</p>
                            <div className="mt-2 text-xs text-gray-500">{date} by <span className="font-bold text-indigo-600">{comment.user.username}</span></div>
                        </li>
                    );
                })}
            </ul>
            <CommentForm postId={postId} onNewComment={handleNewComment} />
        </div>
    );
}

export default CommentSection;
