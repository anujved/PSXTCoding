import Head from "next/head";
import Layout from "./components/layout";
import { map, get, reduce, isNull, isUndefined, some } from "loadsh";
import LaunchesList from "./components/launchesList";
import Filters from "./components/filters";
import { ItemExpenseProvider } from "../helper/context";
import React from "react";
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
  const router = useRouter();


  const applyFilter = (fil) => {
    const allQuery = {...filter,...fil }
    console.log(filter);
    const filterNotEmpty = some(filter, x => {
      console.log(x);
    });
    // console.log(filterNotEmpty);
    const queryPus = reduce(allQuery, (result, value, key)=>{
      return (!isNull(value) && ! isUndefined(value) && value != '') ? (result += key + '=' + value + '&') : result;
    }, '').slice(0, -1);
   
    router.push({
       pathname: '/',
       query: queryPus
       }, undefined, { shallow: true });
    // router.push({
    //   pathname: '/',
    //   query: queryPus
    //   });
  };

  const filterValue = {
    filter,
    filterFn: applyFilter,
  };

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
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
            {launches &&
              map(launches, (post, index) => (
                <LaunchesList key={index} launch={post} />
              ))}
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
export async function getStaticProps( context ) {
  console.log(context.params);
  const params ={};
  const launch_success = get(params, "launch_success", "");
  const land_success = get(params, "land_success", "");
  const launch_year = get(params, "launch_year", "");
  const res = await fetch(
    `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_success}&land_success=${land_success}&launch_year=${launch_year}`
  );
  const launches = await res.json();
  return {
    props: { launches, filter: { launch_success, land_success, launch_year } },
    revalidate: 10, // In seconds
  };
}