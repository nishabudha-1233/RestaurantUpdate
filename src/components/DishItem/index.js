import {useState, useContext} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const DishItem = ({dishDetails}) => {
  const {
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const [quantity, setQuantity] = useState(0)
  const {addCartItem} = useContext(CartContext)

  const onIncreaseQuantity = () => setQuantity(prevState => prevState + 1)
  const onDecreaseQuantity = () =>
    setQuantity(prevState => (prevState > 0 ? prevState - 1 : 0))

  const onAddItemToCart = () => addCartItem({...dishDetails, quantity})

  const renderControllerButton = () => (
    <div>
      <button className="button" type="button" onClick={onDecreaseQuantity}>
        -
      </button>
      <p>{quantity}</p>
      <button className="button" type="button" onClick={onIncreaseQuantity}>
        +
      </button>
    </div>
  )
  return (
    <li className="mb-3 p-3 dish-item-container d-flex">
      <div className={`${dishType === 1}?'non-veg-border':''`}>
        <h1>{dishName}</h1>
        <p>
          {dishCurrency}
          {dishPrice}
        </p>
        <p>{{dishDescription}}</p>
        {dishAvailability && renderControllerButton()}
        {!dishAvailability && <p className="text-danger">Not available</p>}
        {addonCat.length !== 0 && (
          <p className="mb-0">Customization available</p>
        )}
        {quantity > 0 && (
          <button type="button" className="btn" onClick={onAddItemToCart}>
            ADD TO CART
          </button>
        )}
      </div>
      <p>{dishCalories}calories</p>
      <img alt={dishName} src={dishImage} />
    </li>
  )
}

export default DishItem
