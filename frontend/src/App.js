import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Schedule } from './pages/Schedule';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </Router>
  );
}

export default App;
