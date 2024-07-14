import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

import MainListPage from "./pages/MainListPage/MainListPage";
import ListPage from "./pages/ListPage/ListPage";
import ItemPage from "./pages/ItemPage/ItemPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainListPage />} />
        <Route path="/types/items/:type_id/:listId" element={<ListPage />} />
        <Route path="/types/item/:type_id/:itemId" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
