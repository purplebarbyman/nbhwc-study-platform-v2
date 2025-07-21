import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Flashcards from './pages/Flashcards';

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', backgroundColor: '#f4f4f4' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/quiz" style={{ marginRight: '1rem' }}>Quiz</Link>
        <Link to="/flashcards">Flashcards</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/flashcards" element={<Flashcards />} />
      </Routes>
    </div>
  );
}

export default App;