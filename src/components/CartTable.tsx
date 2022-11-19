import './CartTable.scss'
import trashImage from './../assets/images/trash.svg'
type Props = {}

function CartTable({}: Props) {
  const cartData = [
    {
      image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77',
      name: "Product Name",
      price: "$99",
      qty: 2,
      total: '$198',
    },
    {
      image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77',
      name: "Product Name",
      price: "$99",
      qty: 2,
      total: '$198',
    },
    {
      image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77',
      name: "Product Name",
      price: "$99",
      qty: 2,
      total: '$198',
    },
  ]
  return <div className="cart__table__container">
    <div className="cart__table__head">
      <div className="cart__table__row">
        <div className="cart__table__cell">Product Name</div>
        <div className="cart__table__cell">Price</div>
        <div className="cart__table__cell">Quantity</div>
        <div className="cart__table__cell">Total</div>
      </div>
    </div>
    <div className="cart__table__body merriweather">
      {
        cartData.map((item, index) => {
          return <div className="cart__table__row" key={index}>
            <div className="cart__table__cell">
              <div className="d-flex gap-3 align-items-center">
                <div className="product__image">
                  <img src={item.image} alt="" />
                </div>
                {item.name}
              </div>
            </div>
            <div className="cart__table__cell">{item.price}</div>
            <div className="cart__table__cell">{item.qty}</div>
            <div className="cart__table__cell">
              <div className="d-flex justify-content-between w-100">
                <strong>{item.total}</strong>
                <div className="trash">
                  <img src={trashImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        })
      }      
    </div>
  </div>
}

export default CartTable