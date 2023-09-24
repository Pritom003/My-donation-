import React from 'react';

const Selected = ({select}) => {
  const {picture,title,description,price,text_color}=select
  const colorbtn={
    backgroundColor: text_color  
  }
  return (
    <div>

  <div>
    <img src={picture}   className='relative w-screen h-[60vh] ' />
    <div className=' h-12 w-[95vw] absolute -mt-12'>1<button style={colorbtn} className='absolute -mt-12 md:-mt-20 rounded md:rounded-lg
       text-white font-semibold p-2 md:p-6'> Donate $ {price}</button>
       </div>
     
  </div>


    </div>
  );
};

export default Selected;