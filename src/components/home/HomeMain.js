import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import LeftSideSection from './LeftSideSection'

const HomeMain = () => {
    return (
        <div style={{display:'flex' }}>
            <div style={{width:'20%' , display: 'inline-block'}}>
                <ul>
                    <li><NavLink to='/' >LeftSideSection Link </NavLink> </li>
                </ul>
            </div>
            <div style={{width:'70%', display: 'inline-block'}}>
                <Outlet />
            </div>
        </div>
    )
}

export default HomeMain