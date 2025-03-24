import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
//for applying Routing
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* Header is the common element appear in all the pages  */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
