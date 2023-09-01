import React, { useState } from 'react';

function CommentForm() {
    const [content, setContent] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // Perform POST request to create comment
    };

    return (
        <div>
            <h3>Add Comment</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Write your comment..."
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CommentForm;
