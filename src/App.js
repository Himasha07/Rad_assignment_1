
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import History from './routes/History';
import Team from './routes/Team'


function App() {
  return (
    <div className="App">

        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/about" element={<About/>}/>
                    <Route path="/about/history" element={<History />} />
                    <Route path="/about/team" element={<Team />} />
                  
          <Route path= "/contact" element={<Contact/>}/>
        </Routes>

         
    </div>
  );
}

export default App;
