import React, {useContext} from "react";
import { get, map } from "loadsh";
import filterContext from "../../helper/context"

/**
 *
 * @param {Obejct} value required must be filter object
 */

const FilterIteam = ({ value }) => {
  return (
    <div>
      <label>{get(value, "label")}</label>
      <ul>
        {map(get(value, "fields"), (filterValue, fieldsIndex) => (
          <FilterIteamList key={fieldsIndex} filterValue={filterValue} />
        ))}
      </ul>
    </div>
  );
};

export default FilterIteam;

const FilterIteamList = ({ filterValue }) => {
  const context = useContext(filterContext);
  console.log(context);
  return (
    <li>
      <button>{get(filterValue, "label").toString()}</button>
    </li>
  );
};
