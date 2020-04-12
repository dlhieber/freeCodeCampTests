import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WindowsWindow from "../components/WindowsWindow"
import { Location } from '@reach/router'
import queryString from 'query-string'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  
  
    <Location>
      {({ location, navigate }) => (
           <WindowsWindow search={location.search ? queryString.parse(location.search).test : {}} /> 
       
      )}
    </Location>

   
  </Layout>
)

export default IndexPage
