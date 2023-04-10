import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './Posts.module.scss';
import clsx from "clsx";
import dateToStr from "../../../utils/dateToStr";

const Posts = () => {

  const posts = useSelector(getAllPosts)
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {posts.map(post => (
        <Col key={post.id}>
          <Card className={clsx(styles.post, "mb-2")}>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle className={styles.subtitle}>Author: {post.author}</Card.Subtitle>
            <Card.Subtitle className={styles.subtitle}>Published: {dateToStr(post.publishedDate)}</Card.Subtitle>
            <Card.Text>
              {post.shortDescription}
            </Card.Text>
            <Button variant="primary" className={styles.button} as={Link} to={'/post/' + post.id}>Read More</Button>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Posts;