import React from 'react';

const DonCard = ({ditem}) => {
  const {id, picture,price, title, category, card_bg_color, text_color, button_bg_color } = ditem

  
  const cardStyle = {
    backgroundColor: card_bg_color, 
    color: text_color,                  
  };

  const buttonStyle = {
    backgroundColor: text_color,   
                  
  };
  return (
    <div>
      <div style={cardStyle} className="relative flex  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={picture}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
  
<h3 className='font-semibold'>{category}</h3>
<h1 className='font-bold text-2xl'>{title}</h1>
<p className='font-semibold'>${price}</p>
<button style={buttonStyle} className='text-white font-semibold p-2 rounded'>View Details</button>

  </div>
</div>
      
    </div>
  );
};

export default DonCard;