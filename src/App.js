import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">My Personal Website</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
                <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        
        <main className="max-w-5xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t mt-12 py-6">
          <div className="max-w-5xl mx-auto px-4 text-center text-gray-500">
            © {new Date().getFullYear()} Raz. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to My Website</h1>
      <p className="mb-4">
        This is my personal website built with React and deployed on GitHub Pages.
      </p>
      <Link to="/blog" className="text-blue-600 hover:underline">
        Check out my blog →
      </Link>
    </div>
  );
}

export default App;
