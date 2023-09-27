
import { useLoaderData } from "react-router-dom";
import Displacard from "../../COMPONENTS/displasection/displacard";
import Hero from "../../COMPONENTS/Hero/Hero";
import {useState,useEffect} from "react"


const Home = () => {
 
 const cards=useLoaderData()
 const [cardsData,setCardsData]=useState(cards);

 useEffect(()=>{
  setCardsData(cards)
},[cards])
  
const handleCardData=(data)=>{
  setCardsData(data)
}
console.log(cardsData)

  return (
    <div> 
        <Hero  handleCardData={handleCardData} ></Hero>
        <div>
    </div>
      
      
     
       <div className="grid mt-10 justify-center align-middle items-center gap-10
       grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
       {
        cardsData.map(cards=><Displacard cards={cards} key={cards.id}></Displacard>)
       }


        
       </div>
    </div>
  );
};

export default Home;


// import { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";

// const Banner = ({handleCardData}) => {
//   const cards = useLoaderData();
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const value = e.target.text.value;
//     const data = cards.filter((sData) => sData.category
//      === value);
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