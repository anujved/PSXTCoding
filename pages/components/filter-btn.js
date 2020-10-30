import React from "react";
import { toString } from "loadsh";

/**
 *
 * @param {string} filterValue required filter label
 * @param {string} id required current filter section
 * @param {Function} filterIteamFn required trigger current filter function
 * @param {string} selected required current section selected filter
 * @author Anuj Gupta
 *
 */

const FilterBtn = ({ filterValue, id, filterIteamFn, selected }) => {
  const filterFn = () => {
    if (toString(selected) !== toString(filterValue)) {
      filterIteamFn(id, toString(filterValue));
    } else {
      filterIteamFn(id, "");
    }
  };
  const classAdd = toString(selected) === toString(filterValue) ? "active" : "";

  return (
    <li>
      <button onClick={filterFn} className={classAdd}>
        {toString(filterValue)}
      </button>
    </li>
  );
};

export default FilterBtn;
