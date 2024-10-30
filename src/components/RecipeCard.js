import React, { memo } from 'react';

const Card = memo(({ data = [] }) => {  
  console.log(data);

  return (
    <div className='card-container'>
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        } 
          return (
            <div key={index} className='card'>
              <img src={curItem.urlToImage} alt="FoodRecipe" /> 
              <div className='card-content'>
                <a
                  className='title'
                  href={curItem.url}
                  target='_blank'
                  rel='nonopener noreferrer'
                >
                  {curItem.title}
                </a>
                <p>{curItem.description}</p>
                <button onClick={() => window.open(curItem.url, "_blank")}>
                  Read more
                </button>
              </div>
            </div>
          );
      })}
    </div>
  );
});

export default Card;
