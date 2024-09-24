import { BrowserRouter,Route,Routes } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const Router=()=>{
  return(
    
    <Routes>
  <Route path="/" Component ={Home}/>
  <Route path="/contact" Component ={Contact}/>
  <Route path="/about" Component ={About}/>
    </Routes>
    
  )
}

export default Router