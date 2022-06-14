import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
   <BrowserRouter>
       <Routes>
           <Route path = '/' element={<Dashboard/>}/>
       </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
