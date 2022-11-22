import MyNavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from './context/CartContext';

const productsDB = [
  {
    isbn: "9789569673245",
    title: "Decadencia de Tokio",
    author: "Ryu Murakami",
    price: 18,
    specifications: {
      paperType: "Paperback",
      dimensions: "12.5 x 18 cm.",
      pages: 294,
    },
    img: "/static/images/products/9789569673245.webp",
    stock: 3,
    new: true,
    top: false,
  },
  {
    isbn: "9789569673252",
    title: "El paisaje del país de las cenizas",
    author: "Juza Unno",
    price: 11,
    specifications: {
      paperType: "Paperback",
      dimensions: "12.5 x 18 cm.",
      pages: 164,
    },
    img: "/static/images/products/9789569673252.webp",
    stock: 10,
    new: false,
    top: true,
  },
  {
    isbn: "9789569673221",
    title: "Compartir un marido",
    author: "Ho Xuan Huong",
    price: 13,
    specifications: {
      paperType: "Paperback",
      dimensions: "12.5 x 18 cm.",
      pages: 112,
    },
    img: "/static/images/products/9789569673221.webp",
    stock: 5,
    new: true,
    top: false,
  },
  {
    isbn: "9789569673184",
    title: "El baño de música de las dieciocho",
    author: "Juza Unno",
    price: 13,
    specifications: {
      paperType: "Paperback",
      dimensions: "12.5 x 18 cm.",
      pages: 136,
    },
    img: "/static/images/products/9789569673184.webp",
    stock: 11,
    new: false,
    top: false,
  },
  {
    isbn: "9789569673191",
    title: "Audición",
    author: "Ryu Murakami",
    price: 15,
    specifications: {
      paperType: "Paperback",
      dimensions: "12.5 x 18 cm.",
      pages: 240,
    },
    img: "/static/images/products/9789569673191.webp",
    stock: 7,
    new: false,
    top: false,
  },
  {
    isbn: "9789569673160",
    title: "Fin del verano",
    author: "Chika Sagawa",
    price: 13,
    specifications: {
      paperType: "Paperback",
      dimensions: "12.5 x 18 cm.",
      pages: 164,
    },
    img: "/static/images/products/9789569673160.webp",
    stock: 2,
    new: false,
    top: true,
  },
];
function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <ToastContainer/>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Welcome to our Bookstore" productsDB={productsDB} style={{marginButton: '150px'}}/>} />
          <Route path="/books/isbn/:isbn" element={<ItemDetailContainer productsDB={productsDB} style={{marginButton: '150px'}}/>} />
          <Route path="/books/category/top" element={<ItemListContainer greeting="TOP BOOKS" productsDB={productsDB} category="top" style={{marginButton: '150px'}}/>} />
          <Route path="/books/category/new" element={<ItemListContainer greeting="NEW BOOKS" productsDB={productsDB} category="new" style={{marginButton: '150px'}}/>} />
          <Route path="/books/author/:author" element={<ItemListContainer productsDB={productsDB} style={{marginButton: '150px'}}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
