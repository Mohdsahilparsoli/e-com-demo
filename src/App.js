import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Singaproduct from "./Singaproduct";

const App = () => {

  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/product/:id" element={<Singaproduct/>} />
</Routes>
</BrowserRouter>
  )
}

export default App