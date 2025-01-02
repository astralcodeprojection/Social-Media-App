import React from 'react'
import Logo from '../Logo/Logo'
import { LiaSearchSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div>
        <div className='left'>
            <div className="logodiv">
                <Logo />
            </div>
        </div>
        <div className='center'>
            <div className="searchBar">
                <LiaSearchSolid />
                <input type="text" className='search' />
            </div>
        </div>
        <div className='right'>
            <div className="tabLinks">
                <div className="tabLink1">
                    Home
                </div>
                <div className="tabLink2">
                    Your Feed
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar