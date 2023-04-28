import * as React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Bio from "../components/bio"
import Seo from "../components/seo"
import BlogCard from "../components/blogCard"
import Navbar from "../components/navbar"

// import Home from "../components/home"


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />


const App = () => {
  return (
      <div>
        <Navbar />
        <BlogCard />
      </div>
  );
};

export default App;