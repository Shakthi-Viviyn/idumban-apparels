import React , {useEffect} from 'react';
import './App.scss';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search + location.hash
      // page_search: location.search,
      // page_hash: location.hash,
    });
  }, [location]);

  return null;
}

function App() {

  return (
    <Router>
      <PageTracker />
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
