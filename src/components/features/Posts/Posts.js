import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Row, Col } from "react-bootstrap";
import PostCard from '../PostCard/PostCard';

const Posts = () => {
  const posts = useSelector(getAllPosts)
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {posts.map(post => (
        <Col key={post.id}>
          <PostCard {...post} />
        </Col>
      ))}
    </Row>
  )
}

export default Posts;