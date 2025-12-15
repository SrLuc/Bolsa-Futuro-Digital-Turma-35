// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Students from "./pages/Students";
import CreateStudent from "./pages/CreateStudent";
import Login from "./pages/Login/Login";
import UnderDevelopment from "./pages/UnderDevelopment";
import Teacher from "./pages/Teacher/Teacher";
import TeacherStudents from "./pages/Teacher/TeacherStudents";
import TeacherConfig from "./pages/Teacher/TeacherConfig";

// global styles
import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/create" element={<CreateStudent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/students" element={<TeacherStudents />} />
        <Route path="/*" element={<UnderDevelopment />} />
        <Route path="/teacher/config" element={<TeacherConfig />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
