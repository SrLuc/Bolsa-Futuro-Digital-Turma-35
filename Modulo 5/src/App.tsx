//import BasicButton from "./UI/BasicButton"
//import Container from "./UI/Container"
//import SimpleBottomNavigation from "./UI/SimpleBottomNavigation"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//pages
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import Navbar from "./componentes/Navbar"
import SimpleBottomNavigation from "./UI/SimpleBottomNavigation"
import UnderDevelopment from "./pages/UnderDevelopment"



//Navigation

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aluno" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<UnderDevelopment />} />
        </Routes>
        <SimpleBottomNavigation />
      </BrowserRouter>

    </>
  )
}

export default App
