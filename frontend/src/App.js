import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Schedule } from "./pages/Schedule";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import Team from "./pages/Team";
import { Sponsors } from './pages/Sponsors';
import FAQ from './pages/FAQ';

function App() {
  return (
      <Router>
        <head>
          <link href='https://fonts.googleapis.com/css?family=Outfit' rel='stylesheet'></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        </head> 
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/sponsors" element={<Sponsors/>} />
            <Route path="/team" element={<Team />} />
            <Route path="/more" element={<FAQ />} />

            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </Router>
  );
}

export default App;
