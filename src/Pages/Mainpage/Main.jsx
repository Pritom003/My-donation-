
import { Outlet } from 'react-router-dom';
import Home from '../../Lauouts/Home/Home';
import Header from '../Header/Header';
import Donation from '../../Lauouts/Donation/Donation';
import Stats from '../../Lauouts/Stats/Stats';

const Main = () => {
  return (
    <div>
      <Header></Header>
      this is the main page
      <Outlet>
        <Home></Home>
        <Donation></Donation>
        <Stats></Stats>
      </Outlet>
    </div>
  );
};

export default Main;