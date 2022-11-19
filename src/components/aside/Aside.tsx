import './Aside.scss'
import filterIcon from './../../assets/images/filter.svg'
import BlockHeading from './BlockHeading'
import Colors from './Colors';
import Categories from './Categories';
import AsideAd from '../AsideAd';
type Props = {}

function Aside({}: Props) {
  const colors = [ 1, 2, 3, 4, 5, 6, 7, 8 ]
  const categories = ["Dresses", "Shirt and Top", "Sweater & Cardigans", "Outwears", "Bags", "Shoes", "Accesories"]

  return <aside className="aside">

    <BlockHeading icon={filterIcon} heading="Price" />
    {/* Range Selector */}
    <div className="slidecontainer mb-4">
      <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange" style={{width: '100%'}} />
      <p>Value: <span id="demo"></span></p>
    </div>

    {/* Color */}
    <BlockHeading icon={null} heading="Color" />
    <Colors data={colors} />
    
    {/* Categories */}
    <BlockHeading icon={null} heading="Categories" />
    <Categories categoryList={categories} />

    <AsideAd /> 

  </aside>
}

export default Aside