import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import About from "./pages/About/About";

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/search" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
