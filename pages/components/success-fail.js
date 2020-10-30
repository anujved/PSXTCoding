import React,{Fragment} from 'react';
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
      return <Fragment>Yes</Fragment>;
    } else {
      return <Fragment>Fail</Fragment>;
    }
  };
  export default SuccessFail;