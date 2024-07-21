import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Orders from "./components/Orders";
import OldOrders from "./components/OldOrders";
import NoPage from "./components/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/siparisler" element={<Orders />} />
        <Route path="/gecmissiparisler" element={<OldOrders />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
