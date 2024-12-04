const DishItem = ({
  dishDetails,
  cartItems,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
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
  const onIncreaseQuantity = () => addItemToCart(dishDetails)
  const onDecreaseQuantity = () => removeItemFromCart(dishDetails)

  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }
  const renderControllerButton = () => (
    <div>
      <button className="button" type="button" onClick={onDecreaseQuantity}>
        -
      </button>
      <p>{getQuantity()}</p>
      <button className="button" type="button" onClick={onIncreaseQuantity}>
        +
      </button>
    </div>
  )
  return (
    <li className="mb-3 p-3 dish-item-container d-flex">
      <div className={`${dishType === 1}?'non-veg-border':''`}>
        <h1>
          {dishName}
          {addonCat}
        </h1>
        <p>
          {dishCurrency}
          {dishPrice}
        </p>
        <p>{{dishDescription}}</p>
        {dishAvailability && renderControllerButton()}
        {!dishAvailability && <p>Not available</p>}
      </div>
      <p>{dishCalories}calories</p>
      <img alt={dishName} src={dishImage} />
    </li>
  )
}

export default DishItem
