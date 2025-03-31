import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ChategoryProject from "./components/ChategoryProject";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kategori/:category" element={<ChategoryProject />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
