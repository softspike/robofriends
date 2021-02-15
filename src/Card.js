import React from "react";

const Card = (props) => {
  return (
    // tachyons
    // props.id - linked to web api, (generates random robots)
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${props.id}test?200x200`} alt='photo' />
      {/* <img src="https://robohash.org/test?200x200" alt='photo' /> */}
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
