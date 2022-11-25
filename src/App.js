import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import MyNavBar from "./components/Navbar";
import CartContext from "./components/CartContext";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <ToastContainer />
        <MyNavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting="Welcome to our Bookstore"
                style={{ marginButton: "150px" }}
              />
            }
          />
          <Route path="/cart" element={<Cart style={{ marginButton: "150px" }} />} />
          <Route path="/checkout" element={<Checkout style={{ marginButton: "150px" }} />} />
          <Route
            path="/books/isbn/:isbn"
            element={<ItemDetailContainer style={{ marginButton: "150px" }} />}
          />
          <Route
            path="/books/category/top"
            element={
              <ItemListContainer
                greeting="TOP BOOKS"
                category="top"
                style={{ marginButton: "150px" }}
              />
            }
          />
          <Route
            path="/books/category/new"
            element={
              <ItemListContainer
                greeting="NEW BOOKS"
                category="new"
                style={{ marginButton: "150px" }}
              />
            }
          />
          <Route
            path="/books/author/:author"
            element={<ItemListContainer style={{ marginButton: "150px" }} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
