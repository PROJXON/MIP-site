import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Main } from '../Main/Main';
import { Header } from '../Header/Header';
import { ForCompanies } from '../ForCompanies/ForCompanies';
import { About } from '../About/About';
import { ForUniversities } from '../ForUniversities/ForUniversities';
import { ForInterns } from '../ForInterns/ForInterns';
import { Contact } from '../Contact/Contact';



function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col w-full overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/companies" element={<ForCompanies />} />
        <Route path="/universities" element={<ForUniversities />} />
        <Route path="/interns" element={<ForInterns />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
     
    </div>
  )
}

export default App