import { Link } from "react-router-dom"
import './Breadcrumb.scss'

type Props = {}

const Breadcrumb = (props: Props) => {
  return <ul className="bareadcrumb__container">
    <li className="bareadcrumb__list">
      <Link to="/" className="bareadcrumb__list__link">Home</Link>
    </li>
    <li className="bareadcrumb__list">
      <Link to="/" className="bareadcrumb__list__link active">Products</Link>
    </li>
  </ul>
}

export default Breadcrumb