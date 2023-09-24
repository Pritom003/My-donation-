
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from '../Pages/Mainpage/Main';
import Home from '../Lauouts/Home/Home';
import Donation from '../Lauouts/Donation/Donation';
import Stats from '../Lauouts/Stats/Stats';

const mymainrout =createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>     },
      {
        path:'/donations',
        element: <Donation></Donation>    },
      {
        path:'/stats',
        element: <Stats></Stats>     }
    ]
  },
]);
export default mymainrout;