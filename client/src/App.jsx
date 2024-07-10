import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import MainListPage from "./pages/MainListPage/MainListPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainListPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
