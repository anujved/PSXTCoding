import React, { useContext, useCallback } from "react";
import { toString } from "loadsh";
import { get} from "loadsh";
import filterContext from "../../helper/context";
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
  const context = useContext(filterContext);

  const loading = () => {
    return get(context, 'loading');
  }

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
      <button onClick={filterFn} className={classAdd} disabled={loading()}>
        {toString(filterValue)}
      </button>
    </li>
  );
};

export default FilterBtn;
