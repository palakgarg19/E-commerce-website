import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav=()=>{
    const auth = localStorage.getItem('user');

    const navigate = useNavigate();
    const logout = () =>{
        localStorage.clear();
        navigate('/signup')
    }
    return(
        <div>
            <img src='https://i.pinimg.com/236x/e1/0a/46/e10a4646a0122dce14eac59d548849ba.jpg' alt='logo' className='logo'></img>
            { auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update/:id">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className= "nav-ul nav-right">
                <li><Link to="/signup"> Sign Up </Link></li>
                <li><Link to="/login"> Login </Link></li> 
            </ul>}
        </div>
    )
}

export default Nav;