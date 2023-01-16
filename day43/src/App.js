import './App.css';
import About from './components/About'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import FeedbackForm from './components/FeedbackForm';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Usukhuu from './components/about/Usukhuu';
import Khangai from './components/about/Khangai';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Day43: React Routes</h1>
        <div id='navbar'>
          <Link to={'/Home'}>Home</Link>
          <Link to={'/About'}>About</Link>
          <Link to={'/Login'}>Login</Link>
          <Link to={'/Register'}>Register</Link>
          <Link to={'/FeedbackForm'}>Form</Link>
        </div>

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/about/*" element={<About />}>
            <Route path="usukhuu" element={<Khangai />} />
            <Route path="khangai" element={<Usukhuu />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/feedbackform' element={<FeedbackForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
