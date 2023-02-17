import Navbar from './components/home/Navbar';

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AppProvider } from './context/AppContext';
import { AuthContextProvider } from './context/AuthContext';
import { Message } from '@mui/icons-material';
import Sideleft from './components/home/Sideleft';



function App() {
  return (
    <AuthContextProvider>
        <AppProvider>
            <div>
                  <Navbar/>
                  <div>
                    
                    {window.location.pathname === "/login" || window.location.pathname === "/login" ? null : <Sideleft/> }
                  <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/message' element={<Message/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                  </Routes> 
                  </div>
                
            </div>
        </AppProvider>
    </AuthContextProvider>
    
  );
}

export default App;
