import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Schedule } from "./pages/Schedule";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import Team from "./pages/Team";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Outfit"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
