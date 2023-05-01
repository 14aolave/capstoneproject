import * as React from "react"
import { Link, graphql } from "gatsby"
import axios from "axios"
import '../../src/style.css';

const BlogCard = () => {
const [blogData, setBlogData] = React.useState([]);

  async function getBlogPosts() {
    try {
      const response = await axios.get("http://localhost:8000/blogs");
      console.log("response", response.data);
      return setBlogData(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  const renderBlogData = () => {
    return blogData.map((data) =>{
        return (
            <div className="blog-container">
              <div className="blog-title">{data.title}</div>
              <div className="blog-img">
                <img src={data.imageUrl} alt="can be anything" />
              </div>
              <div className="blog-content">{data.content}</div>
            </div>
        )
    })
  }

  React.useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <div>
      <ol style={{ listStyle: `none` }}>
      {renderBlogData()}
      </ol>
    </div>
  )
}

export default BlogCard