import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div className="menubar">
            <div className="menu-title">Rinkal</div>
            <div >
                <ul className="menu-list" type="none">
                    <li className="menu-li"> <NavLink style={({isActive})=>{return{"color":isActive? 'green':''}}} className='headLink' to='/home' > Home </NavLink>  </li>
                    <li className="menu-li"> <NavLink style={({isActive})=>{return{"color":isActive? 'green':''}}} className='headLink' to='/about' > About </NavLink>  </li>
                    <li className="menu-li"> <NavLink style={({isActive})=>{return{"color":isActive? 'green':''}}} className='headLink' to='/portfolio' > Portfolio </NavLink>  </li>
                    <li className="menu-li"> <NavLink style={({isActive})=>{return{"color":isActive? 'green':''}}} className='headLink' to='/resume'> Resume </NavLink>  </li>
                    <li className="menu-li"> <NavLink style={({isActive})=>{return{"color":isActive? 'green':''}}} className='headLink' to='/contact'> Contact </NavLink>  </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar