import CartTable from "../components/CartTable"
import CoupenCard from "../components/CoupenCard"
import HeroBanner from "../components/herobanner/HeroBanner"
import RecommendedItems from "../components/RecommendedItems"

type Props = {}

function Cart({}: Props) {
  return <>
    <HeroBanner />
    <section className='product__listing__section'>
      <div className="container">
        <h2 className="fs-1 merriweather mb-4 pt-3">Cart</h2>
        <CartTable />
        <div className="row mt-5">
          <div className="col-12 col-lg-6">
            <CoupenCard />
          </div>
          <div className="col-12 col-lg-6">
            <div className="card__checkout__details">
              <h3 className="merriweather fw-bold mb-4">Cart Totals</h3>
              <ul className="details__list mb-4">
                <li>
                  <span>Subtotal</span>
                  <span>$150</span>
                </li>
                <li>
                  <span>Shipping</span>
                  <span>Free Shipping</span>
                </li>
                <li>
                  <span>Total</span>
                  <span>$350</span>
                </li>
              </ul>
              <button type="button" className="btn btn-primary px-4 btn-lg w-100">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <RecommendedItems />
  </>
}

export default Cart