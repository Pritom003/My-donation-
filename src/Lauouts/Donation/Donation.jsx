import { useEffect, useState } from "react";
import DonCard from "../../COMPONENTS/Donerioncard/DonCard";


const Donation = () => {

  const [selects,setselects]=useState([])
  const [nodata,setnodata]=useState(false)
  const [isshow,setishow]=useState(false)
  useEffect(()=>{

    const donations=JSON.parse(localStorage.getItem('selectedItem'))
    if (donations){
      setselects(donations)}

else{
  setnodata('You havent doneted anything')
}

  },[])
  const handleshowbtn=(data)=>{
    setishow(data)
    console.log(data)
  }

  
  
  return (
    <div className="grid justify-center align-middle gap-6 mt-10">
      {nodata?<p>{nodata}</p>
      :
      
      <div> 
        
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center
        gap-6">
         {
          isshow? (
            selects.map(ditem=><DonCard key={ditem.id}
            ditem={ditem}></DonCard>)

              ): (
            selects.slice(0,4).map(ditem=><DonCard key={ditem.id}
            ditem={ditem}></DonCard>)

                 )
         }
        </div>
        <div className="flex justify-center align-middle mt-5 gap-5">
        <div className={selects.length<=4 && `hidden`}>
        <button className="bg-primary p-2 rounded-lg text-white font-bold" onClick={()=>handleshowbtn(!isshow)}> see more</button>
        
        </div>
        </div>
        
       
        </div>}
    </div>
  );
};

export default Donation;