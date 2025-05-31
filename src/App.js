import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Tutoring from './pages/Tutoring';
import ContactMe from './pages/ContactMe';
import HomePageContent from './pages/Home';
import Navbar from './components/Navbar';

import useDarkMode from './hooks/useDarkMode';
import useHideOnScroll from './hooks/useHideOnScroll';
import useLoadingBars from './hooks/useLoadingBars';

import Loader from './hooks/Loader';
import Bars from './hooks/Bars';



function AppWrapper() {
  const [darkMode, setDarkMode] = useDarkMode();
  const hideNav = useHideOnScroll();
  const { loading, barOrder } = useLoadingBars();

  if (loading) return <Loader />;

  return (
    <div className="App intro-animate">
      <Bars barOrder={barOrder} />
      <Navbar hideNav={hideNav} />
      <Routes>
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/" element={<HomePageContent darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/tutoring" element={<Tutoring />} />
        <Route path="*" element={<HomePageContent darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
