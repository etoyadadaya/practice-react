import Home from "./components/Home/Home"
import About from "./about"

import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={"ABOBA"}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App