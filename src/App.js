import MyNavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome to our Bookstore" style={{marginButton: '150px'}}/>} />
        <Route path="/books/:isbn" element={<ItemListContainer greeting="Book" style={{marginButton: '150px'}}/>} />
        <Route path="/books/top" element={<ItemListContainer greeting="TOP BOOKS" category="top" style={{marginButton: '150px'}}/>} />
        <Route path="/books/new" element={<ItemListContainer greeting="NEW BOOKS" category="new" style={{marginButton: '150px'}}/>} />
        <Route path="/books/author/:author" element={<ItemListContainer greeting="Author BOOKS" style={{marginButton: '150px'}}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
