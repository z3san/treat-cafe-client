import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHamburger, FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
const { user, logOut } = useContext(AuthContext);
const handleLogout = () =>{
logOut().then(()=>{}).catch(error=>{
  console.log(error);
})
}

    return (
  <div className="navbar bg-gray-20 backdrop-blur bg-white/50 sticky top-0 z-30">
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
        <Link to='/' className="btn btn-ghost normal-case text-xl"> <FaHamburger className='text-yellow-400 mx-2 w-7'/> <span className='text-yellow-500'>Treat</span> 
        <span className='text-green-700'>Cafe</span> </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal items-center px-1 gap-5">
     <NavLink className={({ isActive }) => (isActive ? 'text-yellow-500' : 'default')}  to='/'>Home</NavLink>
     <NavLink className={({ isActive }) => (isActive ? 'text-yellow-500' : 'default')}  to='/blogs' >Blogs</NavLink>
     <NavLink className={({ isActive }) => (isActive ? 'text-yellow-500' : 'default')}  to='/aboutus'>About Us</NavLink>
     <NavLink className={({ isActive }) => (isActive ? 'text-yellow-500' : 'default')}  to='/contact'>Contact</NavLink>
   
        
    </ul>
      </div>
     <div className="navbar-end">
     {user && (
              
              <img
    title={user?.displayName}
    src={`${user?.photoURL}`}
    className="w-10 h-10 rounded-full"
    alt=""
  />
            
          )}
          {user ? (
            <button className='btn btn-outline btn-sm mx-2' onClick={handleLogout} >Logout</button>
          ) : (
            <Link to="/login">
              <button className='btn btn-outline btn-sm ' >Login</button>
            </Link>
          )}

      </div>
</div>

    );
};

export default Header;


