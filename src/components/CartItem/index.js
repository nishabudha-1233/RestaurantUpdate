import {useContext} from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = ({cartItemDetails}) => {
  const {
    dishId,
    dishName,
    dishImage,
    quantity,
    dishCurrency,
    dishPrice,
  } = cartItemDetails
  const {
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeCartItem,
  } = useContext(CartContext)
  const onIncreaseQty = () => incrementCartItemQuantity(dishId)
  const onDecreseQty = () => decrementCartItemQuantity(dishId)
  const onRemoveCartItem = () => removeCartItem(dishId)

  return (
    <li>
      <img className="cart-image" src={dishImage} alt={dishName} />
      <div>
        <p>{{dishName}}</p>
        <p>
          {dishCurrency}
          {(quantity * dishPrice).toFixed(2)}
        </p>
      </div>
      <div>
        <button type="button" className="conteol-btn" onClick={onDecreseQty}>
          -
        </button>
        <p>{quantity}</p>
        <button type="button" className="conteol-btn" onClick={onIncreaseQty}>
          +
        </button>
      </div>
      <button
        type="button"
        className="align-self-center"
        onClick={onRemoveCartItem}
      >
        <FaRegTrashAlt />
      </button>
    </li>
  )
}

export default CartItem
