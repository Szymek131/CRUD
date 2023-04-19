import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import { getPostByCategory } from '../../../redux/postsRedux';
import PostCard from '../../features/PostCard/PostCard';

const Category = () => {
  const { category } = useParams();
  const posts = useSelector(state => getPostByCategory(state, category));

  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {posts.map(post => (
        <Col>
          <PostCard {...post} key={post.id} />
        </Col>
      ))}
    </Row>
  )
}

export default Category;