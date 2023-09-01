import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://blogapi-nine.vercel.app/api/posts/all')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Blog Posts</h1>
      <ol>
        {posts.map(post => (
          <>
            <li key={post._id}>{post.title}</li>
            <p key={post._id}>{post.content}</p>
          </>
        ))}
      </ol>
    </div>
  );
}

export default App;
