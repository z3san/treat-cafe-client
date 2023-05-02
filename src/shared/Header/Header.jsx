import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';

const Header = () => {
    return (
  <div className="navbar bg-gray-200 my-container">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       <NavLink to='/'>Home</NavLink>
     <NavLink>Blogs</NavLink>
     <NavLink>About Us</NavLink>
     <NavLink>Contact</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"> <FaHamburger className='text-yellow-400 mx-2 w-7'/> <span className='text-yellow-500'>Treat</span> 
        <span className='text-green-700'>Cafe</span> </a>
      </div>
      <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal items-center px-1 gap-5">
     <NavLink to='/'>Home</NavLink>
     <NavLink to='/blogs' >Blogs</NavLink>
     <NavLink to='/aboutus'>About Us</NavLink>
     <NavLink to='/contact'>Contact</NavLink>
   
        
    </ul>
      </div>
      <div className="navbar-end gap-3">
      <button className="btn btn-outline  btn-success">Login</button>
     <button className="btn btn-outline  btn-success">Logout</button>
    <img title='Zisan' className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      

    </div>
</div>

    );
};

export default Header;