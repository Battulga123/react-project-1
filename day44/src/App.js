import './App.css';
import Accordian from './components/Accordian';
import Panel from './components/Panel';
import { Routes, Route } from 'react-router-dom'
import Index from './components/Index';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Gallery from './components/GalleryPage';
import ToasterPage from './components/ToasterPage';

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
        <Route path={'/gallery'} element={<Gallery/>}/>
        <Route path={'toaster'} element={<ToasterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
