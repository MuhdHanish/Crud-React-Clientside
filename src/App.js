import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup/Signup";

import AdminHome from './pages/AdminHome'
import AdminLogin from "./components/AdminLogin/AdminLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/login" exact element={<Login />}/>
        <Route path="/signup" exact element={<Signup />}/>
        <Route path="/profile" exact element={<Profile />}/>
        <Route path="/admin" exact element={<AdminHome/>}/>
        <Route path="/admin/login" exact element={<AdminLogin/>}/>
      </Routes>
    </>
  )
}

export default App;
