import React from "react";
import { NavLink } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import './CSS/List.css'

const List = () => {
    return (
        <>
            <header className="main-nav">
                <div className="container1 container-flex">
                    <div className="logoContainer">
                        <h1>OpenMyMind</h1>
                        {/* <AcUnitIcon className="logo"/>/ */}
                        {/* <AcUnitIcon /> */}
                    </div>
                    <nav>
                        <div className="list">
                            {/* <a href="#">Home</a>
                    <a href="/about">About</a> */}
                            {/* navlink doesnt allow us to refresh the page */}
                            <NavLink exact to='/' className='listItem' activeClassName="activeItem">Home</NavLink>
                            <NavLink to='/about' className='listItem' activeClassName="activeItem">About</NavLink>
                            <NavLink to='/services' className='listItem' activeClassName="activeItem">Services</NavLink>
                            <NavLink to='/blogs' className='listItem' activeClassName="activeItem">Blogs</NavLink>
                            {/* <NavLink to='#questions' className='listItem' activeClassName="activeItem">FAQs</NavLink> */}
                            <NavLink to='/login' className='listItem' activeClassName="activeItem">Login</NavLink>
                            <NavLink to='/assesment' className='listItem' activeClassName="activeItem">Assesment</NavLink>
                            <NavLink to='/payment' className='listItem' activeClassName="activeItem">Payment</NavLink>
                            <NavLink to='/chat' className='listItem' activeClassName="activeItem">Chatroom</NavLink>
                            {/* <NavLink to='/testimonials' className='listItem' activeClassName="activeItem">testimonials</NavLink> */}
                            <NavLink to='/contact' className='listItem' activeClassName="activeItem">Contact</NavLink>
                            {/* <NavLink to='/policy' className='listItem' activeClassName="activeItem">Policy</NavLink> */}
                        </div>
                    </nav>
                    <div className="icons">
                        {/* search */}   
                        {/* <SearchIcon className="icon" /> */}
                        {/* person */}
                        {/* <PersonIcon className="icon" /> */}
                        {/* call */}
                        {/* <LocalPhoneIcon className="icon" /> */}
                    </div>

                </div>
            </header>
        </>
    )
}
export default List;