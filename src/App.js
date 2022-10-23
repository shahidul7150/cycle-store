import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import SingleItem from './components/SingleItem/SingleItem';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
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
