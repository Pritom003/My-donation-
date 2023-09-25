import React from 'react';
import Swal from 'sweetalert2'

const Selected = ({select}) => {
  const {picture,title,description,
    id,price,text_color,category}=select
  const colorbtn={
    backgroundColor: text_color  
  }
  const handleselecteddonation=()=>{
  
  const containerarray=[]
  const donations=JSON.parse(localStorage.getItem('selectedItem'))
if(!donations){
containerarray.push(select)
localStorage.setItem('selectedItem',JSON.stringify(containerarray))
Swal.fire({
  title: 'GOOD JOB!!!',
  text: `Your Donetion for "${title}" in "${category}" Category is Successfully added`,
  imageUrl: 'https://i.ibb.co/7g3Cprn/hand-image.png',
  imageWidth: 500,
  imageHeight: 200,
  imageAlt: 'Custom image',
})

}
else{
const isexist=donations?.find(item=>item.id==id)

if(!isexist){

  containerarray.push(...donations,select)
  localStorage.setItem('selectedItem',JSON.stringify(containerarray))
  Swal.fire({
    title: 'GOOD JOB!!!',
    text: `Your Donetion for "${title}" in "${category}" Category  is Successfully added`,
    imageUrl: 'https://i.ibb.co/7g3Cprn/hand-image.png',
    imageWidth: 500,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })

}else{
  Swal.fire({
    title:`You have already doneted for ${title} in ${category}  `,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })


}



}

  }
  return (
    <div>

  <div>
    <img src={picture}   className='relative w-screen h-[60vh] ' />
    <div className=' h-12 w-[95vw] absolute -mt-12'>
      <button 
      onClick={handleselecteddonation}
    style={colorbtn} className='absolute -mt-12 md:-mt-20 rounded md:rounded-lg
       text-white font-semibold p-2 md:p-6'> Donate $ {price}</button>
       </div>
     
  </div>


    </div>
  );
};

export default Selected;