
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Account from './Pages/Account';
import { AuthContextProvider } from './Context/AuthContext';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signin' element={<Signup />} />
          <Route path='/account' element={<Account />} />
        </Routes>

      </AuthContextProvider>








    </div>
  );
}

export default App;
