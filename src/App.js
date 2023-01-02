import './App.css';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <nav>
        <h1> This is the Nav /</h1>
      </nav>

      <Link to="/"> Home</Link>
      <Link to="/about"> About</Link>
      <Link to="/profile"> Profile</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <footer>
        <h2>This is the footer /</h2>
      </footer>
    </Router>
  );
}

export default App;
