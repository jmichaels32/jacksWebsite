import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Import Various Pages
import TestingRandomnessPage from './pages/testing_randomness';
import Page2 from './pages/Page2';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Our Website!</h1>
      <p>This is the landing page of our website. Feel free to explore the different pages.</p>
      <nav>
        <ul>
          <li>
            <Link to="/testing_randomness">Testing Randomness</Link>
          </li>
          <li>
            <Link to="/Page2">Page 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/testing_randomness" element={<TestingRandomnessPage />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
