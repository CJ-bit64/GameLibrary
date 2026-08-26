import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import { LibraryProvider } from './context/LibraryContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Library from './pages/Library';
import GameDetails from './pages/GameDetails';
import './App.css';

function App() {
  return (
    <LibraryProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/library" element={<Library />} />
          <Route path="/games/:id" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </LibraryProvider>  
  )
}
export default App;