import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import CreatePostForm from './components/CreatePostForm';
import CommentForm from './components/CommentForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
