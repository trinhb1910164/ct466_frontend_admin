import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Brandlist from "./pages/Brandlist";
import Productlist from "./pages/Productlist";
import Addbrand from "./pages/Addbrand";
import Addproduct from "./pages/Addproduct";
import ViewOrder from "./pages/ViewOrder";
function App() {
  const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
  if(getUserfromLocalStorage != null){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<ViewOrder />} />
          <Route path="customers" element={<Customers />} />
          <Route path="list-brand" element={<Brandlist />} />
          <Route path="brand" element={<Addbrand />} />
          <Route path="brand/:id" element={<Addbrand />} />
          <Route path="list-product" element={<Productlist />} />
          <Route path="product" element={<Addproduct />} />
          <Route path="product/:id" element={<Addproduct />} />
        </Route>
      </Routes>
    </Router>
  );
  }else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
