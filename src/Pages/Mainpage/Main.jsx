
import { Outlet } from 'react-router-dom';
import Home from '../../Lauouts/Home/Home';
import Header from '../Header/Header';
import Donation from '../../Lauouts/Donation/Donation';
import Stats from '../../Lauouts/Stats/Stats';
import Selected from '../../COMPONENTS/Selecteditem/Selected';
import SearchResult from '../../COMPONENTS/Hero/searchitem/SearchResult';

const Main = () => {
  return (
    <div className='max-w-[1400px] ms-auto px-4'>
      <Header></Header>
      
      <Outlet>
        <Home></Home>
        <Donation></Donation>
        <Stats></Stats>
        <Selected></Selected>
        <SearchResult></SearchResult>
      </Outlet>
    </div>
  );
};

export default Main;