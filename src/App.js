import MyNavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <MyNavBar />
      <ItemListContainer greeting="Welcome to our Bookstore" style={{marginButton: '150px'}}/>
      <Footer />
    </>
  );
}

export default App;
