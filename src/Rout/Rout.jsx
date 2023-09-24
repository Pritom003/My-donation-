
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from '../Pages/Mainpage/Main';
import Home from '../Lauouts/Home/Home';
import Donation from '../Lauouts/Donation/Donation';
import Stats from '../Lauouts/Stats/Stats';
import Donate from "../Lauouts/Donate/Donate";

const mymainrout =createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home> ,
         loader:()=>fetch('/allDonation.json')
      
      },
      {
        path:'/donations',
        element: <Donation></Donation>    },
      {
        path:'/stats',
        element: <Stats></Stats>     },
        {
          path:'/donate/:id',
          element:<Donate></Donate>,
          loader:()=>fetch('/allDonation.json')
        }
    ]
  },
]);
export default mymainrout;