import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup/Signup";

import AdminHome from './pages/AdminHome'
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AddUser from "./components/AdminLanding/AddUser/AddUser";
import EditUser from "./components/AdminLanding/EditUser/EditUser";




function App() {

  return (
    <>
      <Routes>
        <Route path="/" exact element={ <Home /> }/>
        <Route path="/login" exact element={<Login /> }/>
        <Route path="/signup" exact element={<Signup />}/>
        <Route path="/profile" exact element={ <Profile />}/>
        <Route path="/admin" exact element={<AdminHome/>}/>
        <Route path="/admin/login" exact element={<AdminLogin/>}/>
        <Route path="/admin/adduser" exact element={<AddUser/>}/>
        <Route path="/admin/edituser/:id" exact element={<EditUser />} />
      </Routes>
    </>
  )
}

export default App;
