import { useState, useEffect } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import ScrollToNav from "./components/scrollToNav/ScrollToNav";
import { Element } from "react-scroll";
import FadeLoader from "react-spinners/FadeLoader";


function App() {
 
  const [isLoading, setISLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setISLoading(false);
    }, 2000);
  }, []);




  return (
    <BrowserRouter>
      <div>
      {isLoading ? (
          <div className="flex justify-center items-center h-screen text-red-700">
            <FadeLoader color="#800080" />
          </div>
        ) : (
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
        )}
       
      </div>
    </BrowserRouter>
  );
}

export default App;
