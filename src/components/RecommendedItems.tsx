import Product from './main/Product';

type Props = {}

function RecommendedItems({}: Props) {
  const dataList = [ 1, 2, 3, 4 ];
  return <section className="recommended__item__container pt-5">
    <div className="container">
      <h2 className='fw-1 merriweather fw-bold mb-4 pb-3'>Recommended for you</h2>
      <div className="row">
        {
          dataList.map((item, index) => {
            return <div className="col-12 col-md-6 col-xl-3" key={index}>
              <Product />
            </div>
          })
        }
      </div>
    </div>
  </section>
}

export default RecommendedItems