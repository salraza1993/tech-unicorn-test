import TopStrip from './TopStrip'

import './Header.scss'
import Navigation from './Navigation'


type Props = {}

function Header({}: Props) {
  return <header className="main__header">
    <TopStrip />
    <Navigation />
  </header>
  
}

export default Header