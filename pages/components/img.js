import React from "react";
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
    return <div className="url_wrapper"><Image src={url} unsized={true} loading="lazy"/></div>;
  };

export default Img;