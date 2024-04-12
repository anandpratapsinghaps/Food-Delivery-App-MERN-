import './App.css';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/signup.js';
import Cart from './Screens/Cart.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './Components/ContextReducer.js';
function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/createuser" element={<Signup/>}/>
          {/* <Route exact path='/cart' element={<Cart/>}/> */}
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;

