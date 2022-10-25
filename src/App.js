import MyNavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <MyNavBar />
      <ItemListContainer greeting="Welcome to LTP Game Asset Store!" />
      <Footer />
    </>
  );
}

export default App;
