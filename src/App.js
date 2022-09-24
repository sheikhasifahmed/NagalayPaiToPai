import React from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";
import PaiToPai from "./components/PaiToPai/PaiToPai";
import DuePayment from "./components/DuePayment/DuePayment";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess";
import WithdrawSuccess from "./components/WithdrawSuccess/WithdrawSuccess";
import SuperLogin from "./components/SuperAdmin/SuperLogin/SuperLogin";
import UserManagement from "./components/SuperAdmin/UserManagement/UserManagement";

function App() {
  return (
    <div className="App bg-nagalay">
      <Header></Header>
      <div className="py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Registration />} />
          <Route path="paitopai" element={<PaiToPai />} />
          <Route path="duepayment" element={<DuePayment />} />
          <Route path="paymentsuccess" element={<PaymentSuccess />} />
          <Route path="withdrawsuccess" element={<WithdrawSuccess />} />
          <Route path="superadmin" element={<SuperLogin />} />
          <Route path="usermanagement" element={<UserManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
