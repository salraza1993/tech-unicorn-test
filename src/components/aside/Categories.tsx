import arrowRight from './../../assets/images/chevron-right.svg'
type Props = {
  categoryList: Array
}

function Categories({categoryList}: Props) {
  return <ul className="filter__categories">
    {
      categoryList.map((item:any, index:number) => {
        return <li className="filter__categories__list" key={index}>
          {item}
          <img src={arrowRight} alt="Right Arrow" />
        </li>
      })
    }
  </ul>
}


export default Categories