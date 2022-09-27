//////////9 SEP CODE 1 FOR CAFE//////
// import "./App.css";
// function App() {
//   return (
//     <div>
//       <h1>CAFE APP</h1>
//     </div>
//   );
// }
// export default App;

//////////9 SEP CODE 2 FOR CAFE//////
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/login/Login";
// import Cafe from "./components/cafe/Cafe";

// function App() {
//   return (
//     <Router>
//       <h1>always there</h1>
//

//       <Routes>
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/cafe" element={<Cafe />} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;

////////////9 SEP CODE 3 FOR CAFE//////
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Cafe from "./components/cafe/Cafe";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <Router>
      {/* <Navbar /> */}

      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cafe" element={<Cafe />} />
      </Routes>
    </Router>
  );
}
export default App;
