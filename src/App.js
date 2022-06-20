import { TheApp, Content } from "./css/App.styled";
import HeaderBanner from "./components/Header";
import Navbar from "./components/Navbar";
import FooterBanner from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CodeNation from "./pages/CodeNation";

const App = () => {
  return (
    <TheApp>
      <HeaderBanner />
      <BrowserRouter>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/CodeNation" element={<CodeNation />} />
          </Routes>
        </Content>
        <FooterBanner />
      </BrowserRouter>
    </TheApp>
  );
};

export default App;
