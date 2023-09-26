
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
    <div className='w-full grid justify-start gap-2'>

  <div className='grid justify-center align-middle mt-10'>
    <img src={picture}   className=' h-[60vh]  ' />
    <div className='bg-black bg-opacity-25 w-full sm:h-16
     -mt-16   '>
      <button 
      onClick={handleselecteddonation}
    style={colorbtn} className=' rounded  md:rounded-lg mb-2
       text-white font-semibold p-2 md:p-4 ml-2 mt-2'> Donate $ {price}</button>
       </div>
       <div className='mt-8 '>
        <h1 className='text-2xl mb-4 font-bold '>{title}</h1>
        <p className='w-full'>{description}</p>
       </div>
     
  </div>


    </div>
  );
};

export default Selected;