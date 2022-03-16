import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MapPage} from "./components/map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
