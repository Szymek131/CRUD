import { Button } from "react-bootstrap";
import styles from './Home.module.scss';
import { Link } from "react-router-dom";
import Posts from "../../features/Posts/Posts";

const Home = () => {
  return (
    <div>
      <div className={styles.homeContainer}>
        <h1>All Posts</h1>
        <Button size="lg" variant="outline-info" as={Link} to='/post/add'>Add Post</Button>
      </div>
      <div>
        <Posts />
      </div>
    </div>
  )
}

export default Home