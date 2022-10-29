import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Authentication/Register';
import Login from './pages/Authentication/Login';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<PrivateRoute name="home"><Home/></PrivateRoute>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
