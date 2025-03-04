import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCounter from "./pages/AddCounter";
import CounterDetail from "./pages/CounterDetail";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddCounter />} />
        <Route path="/counter/:id" element={<CounterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Home from "./pages/Home";
// import AddCounter from "./pages/AddCounter";
// import CounterDetail from "./pages/CounterDetail";
// import "./App.css";

// function App() {
//   const [counters, setCounters] = useState([]);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home counters={counters} setCounters={setCounters} />} />
//         <Route path="/add" element={<AddCounter counters={counters} setCounters={setCounters} />} />
//         <Route path="/counter/:id" element={<CounterDetail counters={counters} setCounters={setCounters} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
