import React from 'react';
const TableLyout = ({ label, text }) => {
    return (
        <li><b>{label}</b> <span>{text}</span></li>
    );
  };
  export default TableLyout;