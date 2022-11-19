import SearchBar from '../SearchBar'
import listViewIcon from './../../assets/images/list.svg'
import gridViewIcon from './../../assets/images/grid.svg'
import './Main.scss'
import Product from './Product'
import RecommendedItems from '../RecommendedItems'
type Props = {}

function Main({}: Props) {
  const dataList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  return <main className="main__container">
    <SearchBar />
    <div className="main__filterable__elements [ d-flex justify-content-between align-items-center mb-4 ]">
      <div className="left__block">
        <div className="total__result">
          <p className='mb-0'>Showing 1-9 Results</p>
        </div>
      </div>
      <div className="right__block [ d-flex align-items-center gap-3 ]">
        <div className="sorting [ d-flex align-items-center gap-3 ]">
          <p className="m-0">Sort</p>
          <select className="form-select" aria-label="Default select example">
            <option>Newest</option>
            <option value="1">Oldest</option>
          </select>
        </div>
        <div className="view__type">
          <img src={listViewIcon} alt="List View Icon" />
        </div>
        <div className="view__type">
          <img src={gridViewIcon} alt="Grid View Icon" />
        </div>
      </div>
    </div>

    <section className="product__list__section">
      <div className="row ">
        {
          dataList.map((item, index) => {
            return <div className="col-12 col-md-6 col-xl-4" key={index}>
              <Product />
            </div>
          })
        }
      </div>
    </section>
  </main>
}

export default Main