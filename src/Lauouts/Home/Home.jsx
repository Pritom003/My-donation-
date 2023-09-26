
import { useLoaderData } from "react-router-dom";
import Displacard from "../../COMPONENTS/displasection/displacard";
import Hero from "../../COMPONENTS/Hero/Hero";
import SearchResult from "../../COMPONENTS/Hero/searchitem/SearchResult";
import { useState } from "react";


const Home = () => {
 
 const displaydata=useLoaderData()
 

 
  



  return (
    <div> <div>
        <Hero ></Hero>
        
    </div>
      
      
     
       <div className="grid mt-10 justify-center align-middle items-center gap-10
       grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          displaydata?.map(card=><Displacard key={card.id} card={card}></Displacard>)


        }
       </div>
    </div>
  );
};

export default Home;