import * as React from "react"

import Seo from "../components/seo"

const NotFoundPage = () => {

  return (
    <div>
      <h1>404: Not Found</h1>
      <p>No blogs here..</p>
    </div>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
