
/**
 *
 * @param {Boolean} status required
 * @returns jsx object with yes no output
 * @author Anuj Gupta
 *
 *
 */
const SuccessFail = ({ status }) => {
    if (status) {
      return <b>Yes</b>;
    } else {
      return <b>Fail</b>;
    }
  };
  export default SuccessFail;