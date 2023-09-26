import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import ScrollToNav from "./components/scrollToNav/ScrollToNav";
import { Element } from "react-scroll";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Element name="navbar">
        <Navbar />
        </Element>
        <Routes>
          <Route path="*" exact element={<Home />} />
        </Routes>
        <ScrollToNav />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
