import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Our Website!</h1>
      <p>This is the landing page of our website. Feel free to explore the different pages.</p>
      <nav>
        <ul>
          <li>
            <Link to="/Page1">Page 1</Link>
          </li>
          <li>
            <Link to="/Page2">Page 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LandingPage;
