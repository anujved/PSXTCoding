import React from 'react';
import SuccessFail from "./success-fail";
import { get, toString } from "loadsh";
import Img from "./img"
import TableLyout from "./table-lyout";
/**
 *
 * @param {Object} launch required single post object
 * @returns Launch Item Jsx return
 * @author Anuj Gupta
 *
 *
 */
const LaunchesList = ({ launch }) => {
  return (
    <div className="col">
      <div className="launch_item">
        <Img url={get(launch, "links.mission_patch_small")} />
        <h1>{get(launch, "mission_name")}</h1>
        <ul className="detailcomponent">
        <TableLyout
          label="Mission Ids:"
          text={get(launch, "mission_id",[]).join()}
        />
        <TableLyout label="Launch Year" text={get(launch, "launch_year")} />
        <TableLyout
          label="Successful Launch:"
          text={<SuccessFail status={get(launch, "launch_success")} />}
        />
        <TableLyout
          label="Successful Landing:"
          text={toString(get(launch, "launch_landing",'-'))}
        />
        </ul>
      </div>
    </div>
  );
};
export default LaunchesList;