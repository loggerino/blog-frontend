import React from 'react';

function CommentSection({ comments }) {
    return (
        <div className="comment-section">
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment._id}>{comment.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default CommentSection;
