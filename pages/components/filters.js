import React from "react";
import { map } from "loadsh";
import FilterIteam from "./filter-iteam";
/**
 * @description static filter list
 * @author Anuj Gupta
 *
 * */

const filtersList = {
  launch_year: {
    label: "Launch Year",
    id: "launch_year",
    fields: [
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
    ],
  },
  launch_success: {
    label: "Successfull Launch",
    id: "launch_success",
    fields: [true, false],
  },
  land_success: {
    label: "Successfull Landing",
    id: "land_success",
    fields: [true, false],
  },
};
/**
 *
 * @description Filter Componenet
 * @author Anuj Gupta
 *
 */
const Filters = () => {
  return (
    <div className="filter_wrapper">
      {map(filtersList, (value, index) => (
        <FilterIteam value={value} key={index} />
      ))}
    </div>
  );
};

export default Filters;
