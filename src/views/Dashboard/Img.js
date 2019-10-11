import React from 'react';
import PropTypes from 'prop-types';
const Img =({property})=>{
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
   return (
       <div id={`card-${index}`}>
            <img src={picture}/>
       </div>
   )
}
Img.propTypes = {
    property: PropTypes.object.isRequired
}
export default Img;