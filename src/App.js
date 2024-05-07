import './App.css';

import Create from "./Components/Create"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Read from "./Components/Read";
import Update from "./Components/Update";
function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Create/>}/>
      <Route path="/read" element={<Read/>}/>
      <Route path="/update" element={<Update/>}/>
    
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



// we have used mockapi to store the data