import React, { useState } from 'react';

function CreatePostForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // Perform POST request to create post
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreatePostForm;
