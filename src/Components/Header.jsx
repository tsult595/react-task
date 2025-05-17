import React from 'react'
import Image from '../assets/react.svg'
const Header = () => {
  return (
    <div className='headerFlex'>
    <div className='logo'>
     <img className='image' src={Image} alt="" />
     </div> 
     <nav>
         <ul className='nav'>
             <li>H</li>
             <li>E</li>
             <li>A</li>
             <li>D</li>
             <li>E</li>
             <li>R</li>
         </ul>
     </nav>
 </div>
  )
}

export default Header