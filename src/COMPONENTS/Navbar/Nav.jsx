
import { NavLink } from 'react-router-dom';


const Nav = () => {


  return (
    <div className='sticky top-0 z-50'>
      <div className="navbar bg-base-100 shadow-lg ">
  <div className="flex-1">
    
      <img className='h-10 w-28' src='https://i.ibb.co/6rxw5rh/Logo.png'></img>
    
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
Donetion
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
