import React, { useState } from 'react';

function CommentForm() {
    const [content, setContent] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Add Comment</h3>
            <form onSubmit={handleSubmit} className="mt-4">
                <textarea
                    placeholder="Write your comment..."
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <button type="submit" className="mt-2 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
            </form>
        </div>
    );
}

export default CommentForm;
