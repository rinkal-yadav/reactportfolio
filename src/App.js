import './App.css';
import Home from './Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Aboutme from './Component/Aboutme';
import Resume from './Component/Resume';
import ContactForm from './Component/ContactForm';

function App() {
  return (
    <div className="App">
      <Router>
      <Home/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<Aboutme/>}/>
          <Route path='/portfolio' element={<Resume/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/contact' element={<ContactForm/>}/>

        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
