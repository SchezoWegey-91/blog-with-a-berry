import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/blog-posts/${id}.md`)
      .then(response => response.text())
      .then(text => {
        // Parse front matter (simple version)
        const frontMatterPattern = /^---\n([\s\S]*?)\n---\n/;
        const match = text.match(frontMatterPattern);
        
        if (match) {
          const frontMatter = match[1];
          const content = text.replace(frontMatterPattern, '');
          
          // Parse front matter data
          const metadata = {};
          frontMatter.split('\n').forEach(line => {
            const [key, value] = line.split(': ');
            if (key && value) {
              metadata[key.trim()] = value.trim();
            }
          });
          
          setPost({
            ...metadata,
            content: marked(content)
          });
        } else {
          setPost({
            content: marked(text)
          });
        }
        
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading blog post:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center p-8">Loading post...</div>;
  }

  if (!post) {
    return <div className="text-center p-8">Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link to="/blog" className="text-blue-600 hover:underline mb-4 block">
        ← Back to all posts
      </Link>
      
      {post.title && (
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      )}
      
      {post.date && post.author && (
        <div className="text-gray-600 mb-8">
          <span>{new Date(post.date).toLocaleDateString()}</span> • <span>{post.author}</span>
        </div>
      )}
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </div>
  );
}

export default BlogPost;