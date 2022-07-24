import React from "react"

/******** Components *************/
import Layout from "../components/layout"
import SEO from "../components/seo"
import JeffDevSite from './jeff-dev-site';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`developer`, `react`, `react native`, `web development`, `jeff`, `jeff molter`]} />
    <JeffDevSite/>
  </Layout>
);

export default IndexPage;
