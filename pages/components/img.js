import React from 'react';
import Image from 'next/image'
/**
 *
 * @param {String} url required
 * @returns jsx object with yes no output
 * @author Anuj Gupta
 *
 *
 */
const Img = ({ url }) => {
    return <div className="url_wrapper">
      {url?<Image src={url} unsized={true} loading="lazy"/>:<div>image not available</div>}
      </div>;
  };

export default Img;