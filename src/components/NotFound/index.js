import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    console.log(hello);
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not found"
      className="not-found-img"
    />
    <h1>Page Not Found</h1>
    <Link to="/">
      <button type="button">Go Home</button>
    </Link>
  </div>
)

export default NotFound
