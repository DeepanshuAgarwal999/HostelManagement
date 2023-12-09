import React from "react";
import DataTable from "./components/shared/DataTable";
import Home from "./components/home/Home";
import Sign from "./components/auth/Sign";
import Signup from "./components/auth/Signup";
import StudentRegister from "./components/StudentRegister";
import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/header/Header";
import StudentProfile from "./components/StudentProfile";
import UpdateStudent from "./components/UpdateStudent";
import PageNotFound from "./components/shared/PageNotFound";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getdata" element={<DataTable />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/studentregister" element={<StudentRegister />} />
        <Route path="/profile/:id" element={<StudentProfile />} />
        <Route path="/update/:id" element={<UpdateStudent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
