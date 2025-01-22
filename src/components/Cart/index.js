import {useContext} from 'react'
import Header from '../Header'
import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import './index.css'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)
  const renderEmptyView = () => (
    <div className="m-auto d-flex flex-column align-item-center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        className="cart-empty-img"
        alt="cart empty"
      />
      <p className="cart-empty-heading">Your Cart Is Empty</p>
    </div>
  )
  const renderCartItems = () => (
    <>
      <div>
        <h1>Cart Items</h1>
        <button
          type="button"
          className="remove-all-btn text-primary"
          onClick={removeAllCartItems}
        >
          Remove All
        </button>
      </div>
      <ul>
        {cartList.map(dish => (
          <CartItem key={dish.dishId} cartItemDetails={dish} />
        ))}
      </ul>
    </>
  )

  return (
    <div>
      <Header />
      <div>{cartList.length !== 0 ? renderEmptyView() : renderCartItems()}</div>
    </div>
  )
}
export default Cart
