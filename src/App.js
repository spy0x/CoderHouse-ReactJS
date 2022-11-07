import MyNavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

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
];
function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome to our Bookstore" productsDB={productsDB} style={{marginButton: '150px'}}/>} />
        <Route path="/books/isbn/:isbn" element={<ItemDetailContainer productsDB={productsDB} style={{marginButton: '150px'}}/>} />
        <Route path="/books/category/top" element={<ItemListContainer greeting="TOP BOOKS" productsDB={productsDB} category="top" style={{marginButton: '150px'}}/>} />
        <Route path="/books/category/new" element={<ItemListContainer greeting="NEW BOOKS" productsDB={productsDB} category="new" style={{marginButton: '150px'}}/>} />
        <Route path="/books/author/:author" element={<ItemListContainer greeting="Author BOOKS" productsDB={productsDB} style={{marginButton: '150px'}}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
