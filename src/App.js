import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import SingleItem from './components/SingleItem/SingleItem';
import Home from './components/Home/Home';

function App() {
  return (
    <div  >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/product/:id" element={<SingleItem />} />
        {/* {!current ? (
          <Redirect to="/" />
        ) : (
          <Route exact path="/product/:id" component={SingleItem} />
        )} */}
      </Routes>
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
