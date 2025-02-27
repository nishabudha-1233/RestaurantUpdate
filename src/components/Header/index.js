import {useContext} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'
import './index.css'

const Header = props => {
  const {cartList, restaurantName} = useContext(CartContext)

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartIcon = () => (
    <div className="cart-icon-link">
      <Link to="/cart">
        <button type="button" className="cart-icon-button">
          <AiOutlineShoppingCart className="cart-icon" />
        </button>
      </Link>
      <div>{cartList.length}</div>
    </div>
  )
  return (
    <header>
      <Link to="/">
        <p>{restaurantName}</p>
      </Link>
      <div>
        <p>My Orders</p>
        <button type="button" className="btn btn-danger" onClick={onLogout}>
          Logout
        </button>
        {renderCartIcon()}
      </div>
    </header>
  )
}

export default withRouter(Header)
