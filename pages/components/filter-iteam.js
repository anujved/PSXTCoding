import React, { useContext } from "react";
import { get, map } from "loadsh";
import FilterBtn from "./filter-btn";
import filterContext from "../../helper/context";

/**
 *
 * @param {Obejct} value required must be filter object
 *
 */

const FilterIteam = ({ value }) => {
  const context = useContext(filterContext);

  const filterSelected = (currentFilter) => {
    return get(context, `filter.${currentFilter}`);
  };
  const filterFn = (id, filterValue) => {
    context.filterFn({ [id]: filterValue });
  };

  return (
    <div>
      <label>{get(value, "label")}</label>
      <ul>
        {map(get(value, "fields"), (filterValue, fieldsIndex) => (
          <FilterBtn
            key={fieldsIndex}
            filterValue={filterValue}
            id={get(value, "id")}
            filterIteamFn={filterFn}
            selected={filterSelected(get(value, "id"))}
          />
        ))}
      </ul>
    </div>
  );
};

export default FilterIteam;
