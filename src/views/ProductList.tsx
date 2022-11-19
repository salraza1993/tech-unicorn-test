import Aside from "../components/aside/Aside"
import HeroBanner from "../components/herobanner/HeroBanner"
import Main from "../components/main/Main"
import RecommendedItems from "../components/RecommendedItems"

type Props = {}

function ProductList({}: Props) {
  return <>
    <HeroBanner />
    <section className='product__listing__section'>
      <div className="container">
        <div className="product__listing__container [ d-flex gap-5 ]">
          <Aside />
          <Main />
        </div>
      </div>
    </section>
    <RecommendedItems />
  </>
}

export default ProductList