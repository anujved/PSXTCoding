import Head from "next/head";
import Layout from "./components/layout";
import { map,get } from "loadsh";
import LaunchesList from "./components/launchesList";
import "../styles/Home.module.css";
import Filters from './components/filters';
import {ItemExpenseProvider} from '../helper/context';

/**
 *
 * @description Index page serving when user land on the application
 * @author Anuj Gupta
 *
 */

export default function Index({ launches, filter }) {
  // const [filterData, setFilterData] = useState(launches);
  console.log(filter);

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
          <ItemExpenseProvider value={filter}>
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

export async function getServerSideProps(ctx) {
  const launchFilter = get(ctx,'query.launch_success',''); 
  const landFilter = get(ctx,'query.land_success',''); 
  const launchYear = get(ctx,'query.launch_year',''); 
  const res = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchFilter}&land_success=${landFilter}&launch_year=${launchYear}`);

  const launches = await res.json();
  return { props: { launches,filter:{launchFilter, landFilter, launchYear}  } }
}

const DevelopDesign = () => {
  return (
    <p className="dev-name">
      <b>Developed by:</b>Anuj Gupta
    </p>
  );
};