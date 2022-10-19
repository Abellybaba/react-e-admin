//import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css';
import Home from "./pages/home/Home";
import { UserList } from "./pages/userList/UserList";
import { ProductList } from "./pages/productList/ProductList";
import {Product} from "./pages/product/Product"
import {User} from "./pages/user/User";
import {NewUser} from "./pages/NewUser";
import {NewProduct} from "./pages/NewProduct";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

const App = () => {

  return <div>
    <BrowserRouter>
      <Topbar />
      <div className="mt-2 container-fluid d-flex mb-4">
        <div className="row w-100">
          <div className="col-12 col-lg-2 rounded" >
            <Sidebar />
          </div>
          <div className="col-12 col-lg-10 rounded shadow-sm">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="users" element={<UserList />} />
              <Route path="users/:id" element={<User />} />
              <Route path="newUser" element={<NewUser />} />
              <Route path="products" element={<ProductList />} />
              <Route path="products/:id" element={<Product />} />
              <Route path="newproduct" element={<NewProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </div>;
};

export default App;