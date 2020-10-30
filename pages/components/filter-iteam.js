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
          <FilterIteamList key={fieldsIndex} filterValue={filterValue}  id={get(value, "id")}/>
        ))}
      </ul>
    </div>
  );
};

export default FilterIteam;

const FilterIteamList = ({ filterValue,id }) => {
  const context = useContext(filterContext);
  const filterFn = () =>{
    context.filterFn({[id]:get(filterValue, "label").toString()})
  }

  return (
    <li>
      <button onClick={filterFn}>{get(filterValue, "label").toString()}</button>
    </li>
  );
};
