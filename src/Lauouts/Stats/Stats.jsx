import React from "react";
import useFetch from "../../COMPONENTS/HOOK/UseFetchdata";

import Pieee from "./Piechart";

const Stats = () => {
  const [data] = useFetch();
  console.log(data, 'dd');
  
  const donetion = JSON.parse(localStorage.getItem('selectedItem'));
  const donet = donetion ? donetion.length:0

  return (
    <div>
     <Pieee donet={donet} />
    
      
    </div>
  );
};

export default Stats;
