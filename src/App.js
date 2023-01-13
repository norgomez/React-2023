import './App.css';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Button, Divider } from '@mui/material';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />

      <Divider />
      
      {/* Linking links to routes */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant='text'>Home</Button>
      </Link>

      <Link to="/about" style={{ textDecoration: 'none' }}>
      <Button variant='text'>About</Button>
      </Link>

      <Link to="/profile" style={{ textDecoration: 'none' }}>
      <Button variant='text'>Profile</Button>
      </Link>
      
      {/* Anything outside of Routes will remain static & anything inside will change */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Divider />

      <footer>
        <h2>This is the footer /</h2>
      </footer>
    </Router>
  );
}

export default App;
