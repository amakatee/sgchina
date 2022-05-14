import React from 'react'
import {Link} from 'react-scroll'
const style = {
    navButton: ` cursor-pointer hover:text-[#7f53ac]`,

}

const NavOption = ({text, isActive, setSelected, path}) => {
  return (
  <Link  
  activeClass="active"  
  to={path}
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  >
    <div className={ isActive ? 'active-text' : 'dark-text'} 
    onClick={() => {
        setSelected(text)
    }}
    >{text}</div>
 </Link>
  )
}

export default NavOption