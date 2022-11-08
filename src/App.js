import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import SingleItem from './components/SingleItem/SingleItem';
import Home from './components/Home/Home';
import Store from './components/Home/Store/Store';
import Footer from './components/Footer/Footer';
import About from './components/About.js/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div  >

      <Routes>
        <Route path="/" element={<Home />} />

        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/product/:id" element={<SingleItem />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        {/* {!current ? (
          <Redirect to="/" />
        ) : (
          <Route exact path="/product/:id" component={SingleItem} />
        )} */}
      </Routes>
      <Footer />
    </div>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     current: state.shop.currentItem,
//   };
// };
export default App;
// export default connect(mapStateToProps)(App);
