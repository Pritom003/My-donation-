import React, { useState  } from "react";
import useFetch from "../HOOK/UseFetchdata";
// import SearchResult from "./searchitem/SearchResult";


const Hero = ({handleCardData}) => {
  const [data] = useFetch(); 
  
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const results = data.filter(item => 
      item && item.category && item.category.toLowerCase().includes(input.toLowerCase())
    );
    
    handleCardData(results)
  };
  
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  
  

  return (
    <div>
      <div>
        <div className="w-full">
          <div className="hero md:h-[400px]" style={{ backgroundImage: ' url(https://i.ibb.co/7V28WFk/bgimg.jpg ) ' }}>
            <div className="hero-overlay bg-white bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="w-[60vw]">
                <h1 className="text-2xl text-black pb-4 font-bold">I Grow By Helping People In Need</h1>

               <form className="w-full" onSubmit={handleSubmit}>
                  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input
                       onChange={handleChange}
                      type="search" id="default-search" className="block w-full p-4 pl-10 text-sm
                       text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                     <button type="submit" value='search' className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-primary focus:ring-4
                     focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary dark:hover:bg-primary 
                     dark:focus:ring-primary">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      </div>
    
  );
};

export default Hero;




// import { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";

// const Banner = ({handleCardData}) => {
//   const cards = useLoaderData();
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const value = e.target.text.value;
//     const data = cards.filter((sData) => 
// sData.category === value);
//     handleCardData(data);
//   };
  

//   return (
//     <div className="p-4">
//       <div
//         className="hero h-[400px]"
//         style={{
//           backgroundImage:
//             "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR0-j_at9tPKdwksdhUy0DC1nXGiGeF7TiWR7Wb_yoXc_BB5O-ZZbTg8ZZg)",
//         }}
//       >
//         <div className="hero-overlay bg-[white] bg-opacity-80"></div>
//         <div className="hero-content text-center text-neutral-content">
//           <div>
//             <h1 className="mb-5 text-3xl text-black font-bold">
//               I Grow By Helping People In Need
//             </h1>
//             <form onSubmit={handleSearch}>
//               <input
//                 type="text"
//                 placeholder="Search Here"
//                 name="text"
//                 className="input input-bordered input-primary text-black w-full max-w-xs"
//               />
//               <input
//                 className="bg-[#FF444A] p-[13px] rounded-lg text-base font-semibold text-white"
//                 type="submit"
//                 value="Search"
//               />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
// import { useLoaderData } from "react-router-dom";
// import {useState,useEffect} from "react"
// import Cards from "../../Components/Cards/Cards";
// import Banner from "../../Components/Header/Banner/Banner";


// const Home = () => {
//     const cards=useLoaderData();
//     const [cardsData,setCardsData]=useState(cards);
//     useEffect(()=>{
//         setCardsData(cards)
//     },[cards])
//     const handleCardData=(data)=>{
//         setCardsData(data)
//     }
//     return (
//         <div>
//            <div className="bg-[white] bg-opacity-75">
//            <Banner handleCardData={handleCardData}></Banner>
//            </div>
//            <Cards cards={cardsData}></Cards>
//         </div>
//     );
// };

// export default Home;
