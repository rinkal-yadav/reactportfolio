import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Aboutme from './Component/Aboutme';

function App() {
  return (
    <div className="App">
      <Router>
      <Home/>
        <Routes>
          <Route path='/home' element={''}/>
          <Route path='/about' element={''}/>
          <Route path='/portfolio' element={''}/>
          <Route path='/resume' element={''}/>
          <Route path='/contact' element={''}/>

        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
