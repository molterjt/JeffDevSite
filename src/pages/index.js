import React from "react"
import { Link } from "gatsby"


/******** Components *************/
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import JeffDevSite from './jeff-dev-site';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`developer`, `react`, `react native`, `web development`, `jeff`, `jeff molter`]} />
    <JeffDevSite/>
  </Layout>
);

export default IndexPage;
