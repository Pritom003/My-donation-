import React from 'react';
import { Link } from 'react-router-dom';

const Displacard = ({ card }) => {
  const {id, picture, title, category,
     card_bg_color, text_color, button_bg_color } = card;

  
  const cardStyle = {
    backgroundColor: card_bg_color, 
    color: text_color,                  
  };

  const buttonStyle = {
    backgroundColor: button_bg_color,   
    color: text_color,                  
  };

const handledonation=()=>{
  console.log('i am clicked')
}


  
  return (
   
<Link to={`/donate/${id}`}>
<div  className='grid justify-center align-middle'>
      <div className="max-w-xs" style={cardStyle}>
        <a href="#">
          <img className="rounded-t-lg" src={picture} alt="" />
        </a>
        <div className="p-5">
           <button 
          style={buttonStyle}  
          className='p-2 rounded-xl'>{category}</button>
        
          <p className="mb-3 h-12 text-2xl font-normal">{title}</p>
        </div>
      </div>
      </div>
      </Link>
    
  );
};

export default Displacard;
