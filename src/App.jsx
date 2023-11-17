import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Catalogue from "./Pages/Catalogue";
import Promo from "./Pages/Promo";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes >
        <Route element={<Home />} path="/"></Route>
        <Route element={<About />} path="/about"></Route>
        <Route element={<Catalogue />} path="/catalogue"></Route>
        <Route element={<Promo />} path="/promo"></Route>
        <Route element={<Contact />} path="/contact"></Route>

      </Routes >


    </>
  )

}
export default App;