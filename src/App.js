import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from "./Components/pages/Homepage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
      
        <Route path="/" element = {<Homepage />} />
        {/* <Route path="/services" component ={Services} />
        <Route path="/our-team" component={Team}/>
        <Route path="/careers" component = {Career} /> */}
     
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
