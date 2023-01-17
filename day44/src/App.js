import './App.css';
import Accordian from './components/Accordian';
import Panel from './components/Panel';
import { Routes, Route } from 'react-router-dom'
import Index from './components/Index';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Movies from './components/Movies';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <h1>Day44: </h1>
      <Routes>
        <Route path={'/'} element={<Index/>}/>
        <Route path={'/accordian'} element={<Accordian />}/>
        <Route path={'/home'} element={<HomePage />} />
        <Route path={'/about'} element={<AboutPage/>} />
        <Route path={'/movies'} element={<Movies/>} />
        <Route path={'/movie/:id'} element={<Movie/>} />
      </Routes>
    </div>
  );
}

export default App;
