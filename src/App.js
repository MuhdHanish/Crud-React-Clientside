import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";

import AdminHome from './pages/AdminHome'
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminAddUserPage from "./pages/AdminAddUserPage";
import AdminEditUserPage from "./pages/AdminEditUserPage";




function App() {

  return (
    <>
      <Routes>
        <Route path="/" exact element={ <Home /> }/>
        <Route path="/login" exact element={<LoginPage /> }/>
        <Route path="/signup" exact element={<SignUpPage />}/>
        <Route path="/profile" exact element={ <ProfilePage />}/>
        <Route path="/admin" exact element={<AdminHome/>}/>
        <Route path="/admin/login" exact element={<AdminLoginPage/>}/>
        <Route path="/admin/adduser" exact element={<AdminAddUserPage/>}/>
        <Route path="/admin/edituser" exact element={<AdminEditUserPage />} />
      </Routes>
    </>
  )
}

export default App;
