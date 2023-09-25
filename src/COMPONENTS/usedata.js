import { useEffect, useState } from "react"

const usedatadonate=()=>{

  const [item,setitem]=useState()
  useEffect(()=>{
    fetch('/allDonation.json')
    .then(res=> res.json())
    .then((data)=>setitem(data))
  },[])

  return [item]
}
export default usedatadonate