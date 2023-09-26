import { useEffect, useState } from "react";

const useFetch=()=>{

const [data,setdata]=useState()
useEffect(()=>{
fetch('/allDonation.json')
.then(res=>res.json())
.then(datas=>setdata(datas))



},[])


console.log('data',data)

  
  return[data,setdata]

}

export default useFetch;