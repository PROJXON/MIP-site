import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import {Main} from '../Main/Main';
import {Header} from '../Header/Header';
import { ForCompanies } from '../ForCompanies/ForCompanies';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col w-full overflow-x-hidden">
   
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Main />} />
        <Route path="/companies" element={<ForCompanies />} />
        <Route path="/universities" element={<Main />} />
        <Route path="/interns" element={<Main />} />
        <Route path="/contact" element={<Main />} />
      </Routes>
      <Main />
      
      <Footer />

    </div>
  )
}

export default App