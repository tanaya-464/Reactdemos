import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Link, Navigate, Route,useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

const NavigateButton: React.FC =()=>{
  const navigate =useNavigate();
  const goToDashboard=()=>{
    navigate('/dashboard');
    
  };

  return <button onClick ={goToDashboard}>Go To Dashboard</button>
  
};

function App() {
  //Progmatically routing
  return (
    <Router>
     
        <nav>
<Link to="/">Home</Link> |<Link to ="/about">About</Link> | <Link to ="dashboard">DashBoard</Link>
</nav>
      <NavigateButton/>

      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );

  //Conditional Routing
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
//   const handlelogin =()=> setIsAuthenticated(true);
//   const handleLogout =()=> setIsAuthenticated(false);
//   return (
//     <Router>
//       <nav>
// <Link to="/">Home</Link> |<Link to ="/about">About</Link> | <Link to ="dashboard">DashBoard</Link>
// <button onClick={isAuthenticated?handleLogout:handlelogin}>
//   {isAuthenticated?'Logout':'Login'}
// </button>
//       </nav>

//       <Routes>
//         <Route path ="/" element={<Home/>}/>
//         <Route path ="/about" element={<About/>}/>
//         <Route path ="/dashboard" element={isAuthenticated?<Dashboard/>:<Home/>}/>
//       </Routes>
//     </Router>
//   )
}

export default App
