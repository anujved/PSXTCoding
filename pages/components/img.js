/**
 *
 * @param {String} url required
 * @returns jsx object with yes no output
 * @author Anuj Gupta
 *
 *
 */
const Img = ({ url }) => {
    return <div className="url_wrapper"><img src={url}  /></div>;
  };

export default Img;