import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import toast from '../images/toast.jpg'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <h1 style={{margin: 10}}>NOT FOUND</h1>
    <p style={{margin: 10}}>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p style={{margin: 10}}>Not sure what you're digging for... <Link to={"/"} >Go back</Link></p>

      <div style={{margin: 20, justifyContent:'flex-start', alignItems: 'flex-start', display: 'flex', width: '100%', flexDirection:'column'}}>
        <p>Good Day,</p>
        <img src={toast} style={{height: '55vh', }}/>
      </div>
  </Layout>
)

export default NotFoundPage
