import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Flights from "./pages/Flights";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Packages from "./pages/Packages";
import Apartments from "./pages/Apartments";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="flights" element={<Flights />} />

        <Route path="hotels" element={<Hotels />}>
          <Route path=":apartmentsId" element={<Apartments />} />
        </Route>

        <Route path="packages" element={<Packages />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
