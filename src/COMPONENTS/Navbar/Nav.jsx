import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../../Lauouts/Home/Home';

const Nav = () => {


  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">
      <img className='h-10 w-28' src='https://i.ibb.co/6rxw5rh/Logo.png'></img>
    </a>
  </div>
  <div className="flex-none">
    <ul className=" flex  gap-5 px-1">
   
    <li>

    <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline " : ""
  }
>
  HOME
</NavLink>

    </li>
    <li>

<NavLink
to="/donations"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-red-400 underline " : ""
}
>
Donate Now!
</NavLink>

</li>
<li>

    <NavLink
  to="/stats"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }
>
Statistics
</NavLink>

    </li>
  
    </ul>
  </div>
</div>
    </div>
  );
};

export default Nav;
// <li>
{/* <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-300 underline" : ""
  }
>
  Home
</NavLink> */}

// </li>
{/* <li>
<NavLink
  to="/donations"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-300 underline":""
  }
>
Donation
</NavLink>

</li>
<li>
<NavLink
  to="/stats"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-red-300 underline" : ""
  }
>
Statistics
</NavLink>

</li> */}