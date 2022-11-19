import searchIcon from './../assets/images/search.svg'

type Props = {}

function SearchBar({}: Props) {
  return <div className="search__bar__container mb-4">
    <input type="text" placeholder="Search Products" id="" />
    <img className="icon" src={searchIcon} alt="" />
  </div>
}

export default SearchBar