import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhotoGallery from './Photo';
import TagGuessing from './Tag';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/photo">Photo Gallery</a>
        </nav>
        <Routes>
          <Route path="/photo" element={<PhotoGallery />} />
          <Route path="/tag" element={<TagGuessing />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
