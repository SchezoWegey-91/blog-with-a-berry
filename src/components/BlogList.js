import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { marked } from 'marked'; // You'll need to install this: npm install marked

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This assumes you have a posts.json file that lists all your blog posts
    fetch('/blog-posts/posts.json')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading blog posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-8">Loading posts...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>
      
      <div className="space-y-8">
        {posts.map(post => (
          <div key={post.id} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <div className="text-gray-600 mb-4">
              <span>{new Date(post.date).toLocaleDateString()}</span> • <span>{post.author}</span>
            </div>
            <p className="mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;