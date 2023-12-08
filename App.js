import Home from "./files/Home";
import Login from "./files/Login";
import Signup from "./files/Signup";
import Dashbordapp from "./files/Dashbordapp";
import Requestfrom from "./files/Requestfrom";
import Eventlists from "./files/Eventlists";
import Internalevent from "./files/Internalevent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Dashbordapp" element={<Dashbordapp />} />
          <Route path="/Requestform" element={<Requestfrom />} />
          <Route path="/Eventlists" element={<Eventlists />} />
          <Route path="/Internalevent" element={<Internalevent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
