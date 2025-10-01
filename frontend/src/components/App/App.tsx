import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Main } from '../Main/Main';
import { Header } from '../Header/Header';
import { Companies } from '../Companies/Companies';
import { About } from '../About/About';
import { Universities } from '../Universities/Universities';
import { Candidates } from '../Candidates/Candidates';
import { Contact } from '../Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col w-full overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
