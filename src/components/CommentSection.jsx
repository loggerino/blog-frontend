import React from 'react';

function CommentSection({ comments }) {
    console.log('Comments:', comments);
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
        </div>
    );
}

export default CommentSection;
