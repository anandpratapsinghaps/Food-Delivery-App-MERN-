import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import logo from './images/attachment_127439993.png'
import Modal from '../Modal'
import cart from '../Screens/cart'

export default function Navbar() {
  const [cartView, setCartView] = useState(false)
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/")
  }

  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
      <Link className="navbar-brand " to="/"><img src={logo} alt="logo" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2">
          <li className="nav-item">
            <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
          </li>
          {(localStorage.getItem("authToken"))?
          <li className='"nav-item'>
            <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
          </li>
          :""}
        </ul>
        {(!localStorage.getItem("authToken"))?
        <div className='d-flex'>
        <Link className="btn bg-white text-warning mx-1" to="/login">Login</Link>
        <Link className="btn bg-white text-warning mx-1" to="/createuser">SignUp</Link>
        </div>
        :<div>
          <div className='btn bg-white text-warning mx-2'onClick={()=>{setCartView(true)}}>
          My Cart{" "}
          <Badge pill bg='warning'>2</Badge>
          </div>
          {cartView ? <Modal onClose={() => setCartView(false)}><cart/></Modal> : ""}
          <div className='btn bg-white text-danger mx-2'onClick={handleLogout}>Logout</div>
        </div>
        }
        </div>
      </div>
    </nav>
  </div>
  )
}
