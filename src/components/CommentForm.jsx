import React, { useState } from 'react';

function CommentForm({ postId }) {
    const [content, setContent] = useState('');
    const jwt = localStorage.getItem('jwt');
    const [showLoginNotice, setShowLoginNotice] = useState(false);
    const handleSubmit = async event => {
        event.preventDefault();
        if (!jwt) {
            setShowLoginNotice(true);
            return;
        }
        try {
            const response = await fetch(`http://localhost:5000/api/posts/post/${postId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`,
                },
                body: JSON.stringify({ content }),
            });
            if (response.ok) {
                setContent('');
            } else {
                console.log('Comment submission failed:', response.status, response.statusText);
                const data = await response.json();
                console.log('Server response:', data);
            }
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    return (
        <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Add Comment</h3>
            {showLoginNotice && (
                <p className="text-red-500 mt-2">You need to log in before commenting.</p>
            )}
            <form onSubmit={handleSubmit} className="mt-4">
                <textarea
                    placeholder="Write your comment..."
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className={`w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${showLoginNotice ? 'border-red-500' : ''
                        }`}
                />
                <button type="submit" className="mt-2 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
            </form>
        </div>
    );
}

export default CommentForm;
