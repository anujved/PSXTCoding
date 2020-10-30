import React,{memo} from 'react';
/**
 *
 * @param {string} label required
 * @param {string} text required
 * @returns jsx object with yes no output
 * @author Anuj Gupta
 *
 *
 */
const TableLyout = ({ label, text }) => {
    return (
        <li><b>{label}</b> <span>{text}</span></li>
    );
  };
  export default TableLyout;