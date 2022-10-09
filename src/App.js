import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Appointment from "./Pages/Appoinment/Appointment";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import MyHistory from "./Pages/Dashboard/MyHistory";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appointment" element={
          <RequireAuth>
              <Appointment/>
          </RequireAuth>
        }>

        </Route>
        <Route path="/dashboard" element={
          <RequireAuth>
              <Dashboard/>
          </RequireAuth>
        }>

           <Route index element={<MyAppointments/>}></Route>
           <Route path="review" element={<MyReview/>}></Route>
           <Route path="history" element={<MyHistory/>}></Route>
           <Route path="users" element={<Users/>}></Route>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
      
    </div>
  );
}

export default App;
