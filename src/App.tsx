import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/telecommunications" element={<CategoryPage category="Telecommunications" />} />
            <Route path="/economy" element={<CategoryPage category="Economy" />} />
            <Route path="/business" element={<CategoryPage category="Business" />} />
            <Route path="/computer-science" element={<CategoryPage category="Computer Science" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;