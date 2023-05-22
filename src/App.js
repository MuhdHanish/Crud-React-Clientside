import { Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/login" exact element={<Login />}/>
        <Route path="/signup" exact element={<Signup />}/>
        <Route path="/profile" exact element={<Profile />}/>
      </Routes>
    </>
  )
}

export default App;
