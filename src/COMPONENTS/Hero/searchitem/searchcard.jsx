// import React from 'react';
// import { Link } from 'react-router-dom';

// const Searchcard = ({showd}) => {
//   const {id, picture, title, category,
//     card_bg_color, text_color, button_bg_color } = showd
//     const cardStyle = {
//       backgroundColor: card_bg_color, 
//       color: text_color,                  
//     };
//     const buttonStyle = {
//       backgroundColor: button_bg_color,   
//       color: text_color,                  
//     };
  


//     const handledonation=()=>{
      
//     }
    
    
      
//       return (
//         <div className='grid justify-center align-middle'>
//           <div className="max-w-xs" style={cardStyle}>
//             <a href="#">
//               <img className="rounded-t-lg" src={picture} alt="" />
//             </a>
//             <div className="p-5">
//               <Link to={`/donate/${id}`}> <button 
//               style={buttonStyle} onClick={handledonation} 
//               className='p-2 rounded-xl'>{category}</button></Link>
            
//               <p className="mb-3 w-44 text-2xl font-normal">{title}</p>
//             </div>
//           </div>
//         </div>
//       );
//     };

// export default Searchcard;