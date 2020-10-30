import Head from "next/head";
import Layout from "./components/layout";
import { map, get, reduce, isNull, isUndefined, some } from "loadsh";
import LaunchesList from "./components/launchesList";
import Filters from "./components/filters";
import { ItemExpenseProvider } from "../helper/context";
import React, { useState } from "react";
import { useRouter } from "next/router";
import DevelopDesign from "./components/designby";
import "../styles/Home.module.css";
/**
 *
 * @description Index page serving when user land on the application
 * @author Anuj Gupta
 *
 */
export default function Index({ launches, filter }) {
  /**
   *
   * @description state declare
   *
   */

  const [launchesJson, setLaunchesJson] = useState(launches);

  const [filterData, setFilterData] = useState(filter);

  const router = useRouter();

  /**
   *
   * @param {string} fil filter value
   *
   */
  const applyFilter = async (fil) => {
    const allQuery = { ...get(router, "query"), ...fil };

    const queryPus = reduce(
      allQuery,
      (result, value, key) => {
        return !isNull(value) && !isUndefined(value) && value != ""
          ? (result += key + "=" + value + "&")
          : result;
      },
      ""
    ).slice(0, -1);
    const res = await fetch(
      `https://api.spaceXdata.com/v3/launches?limit=100&${queryPus}`
    );
    const launchesClientResponse = await res.json();
    setFilterData(allQuery);
    setLaunchesJson(launchesClientResponse);

    router.push(
      {
        pathname: "/",
        query: queryPus,
      },
      undefined,
      { shallow: true }
    );
  };

  /**
   *
   * @description context property set
   *
   */
  const filterValue = {
    filter: filterData,
    filterFn: applyFilter,
  };

  return (
    <Layout>
      <Head>
        <title>SpaceX Launch Programs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="global_header">
        <h1>SpaceX Launch Programs</h1>
      </header>
      <div className="container">
        <aside className="left">
          <ItemExpenseProvider value={filterValue}>
            <Filters />
          </ItemExpenseProvider>
        </aside>
        <main className="right">
          <div className="row">
            <ShowRicords record={launchesJson}>
              {map(launchesJson, (post, index) => (
                <LaunchesList key={index} launch={post} />
              ))}
            </ShowRicords>
          </div>
        </main>
      </div>
      <div>
        <DevelopDesign />
      </div>
    </Layout>
  );
}
/**
 *
 * @returns object array list first render
 * @description fetching data from api
 * @author Anuj Gupta
 *
 */
export async function getServerSideProps(ctx) {
  const launch_success = get(ctx, "query.launch_success", "");
  const land_success = get(ctx, "query.land_success", "");
  const launch_year = get(ctx, "query.launch_year", "");
  const res = await fetch(
    `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_success}&land_success=${land_success}&launch_year=${launch_year}`
  );
  const launches = await res.json();
  return {
    props: { launches, filter: { launch_success, land_success, launch_year } },
  };
}

const ShowRicords = ({ record, children }) => {
  if (record) {
    return record.length !== 0 ? children : <div>records not found</div>;
  } else {
    return;
  }
};
