import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Selected from '../../COMPONENTS/Selecteditem/Selected';


const Donate = () => {

  const[ select,setselect]=useState([])
  const {id}=useParams()
  console.log(id)
  
  const data=useLoaderData()
  console.log("data",data);
  useEffect(()=>{

     const fonddata=data.find(item=>item.id==id)
     setselect(fonddata)

  },[id,data])
  console.log('selected',select)
  return (
    <div>
      <Selected select={select}></Selected>

    </div>
  );
};

export default Donate;