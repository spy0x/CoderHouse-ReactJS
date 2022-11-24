import MyNavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart";

export class Product {
  constructor(isbn, title, author, price, quantity, img) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = parseInt(quantity);
    this.img = img;
  }
}

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
