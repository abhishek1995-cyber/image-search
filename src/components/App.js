import SearchPage from "./SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../style.css";
import CanvasPage from "./CanvasPage";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SearchPage />} />
          <Route path="/image/:id" exact element={<CanvasPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
