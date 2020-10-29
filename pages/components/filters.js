import React from "React";
import {map} from "loadsh";
import FilterIteam from "./filter-iteam"
/**
 * @description static filter list
 *
 * */

const filtersList = {
  launch_year: {
      label: "Launch Year",
      fields: [
        {
          label:2006,
          active:true,
        },
        {
          label:2007,
          active:false,
        },
        {
          label:2008,
          active:false,
        },
        {
          label:2009,
          active:false,
        },
        {
          label:2010,
          active:false,
        },
        {
          label:2011,
          active:false,
        },
        {
          label:2012,
          active:false,
        },
        {
          label:2013,
          active:false,
        },
        {
          label:2014,
          active:false,
        },
        {
          label:2015,
          active:false,
        },
        {
          label:2016,
          active:false,
        },
        {
          label:2017,
          active:false,
        },
        {
          label:2018,
          active:false,
        },
        {
          label:2019,
          active:false,
        },
        {
          label:2020,
          active:false,
        },
      ],
    },
    launch_success: {
      label: "Successfull Launch",
      fields: [{label:true,active:false}, {label:false,active:false}],
    },
    land_success: {
      label: "Successfull Landing",
      fields: [{label:true,active:false}, {label:false,active:false}],
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