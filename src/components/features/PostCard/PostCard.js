import styles from './PostCard.module.scss';
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import clsx from "clsx";
import PropTypes from 'prop-types';
import dateToStr from "../../../utils/dateToStr";

const PostCard = ({ title, author, category, publishedDate, shortDescription, id }) => (
  <Card className={clsx(styles.post, "mb-2")}>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle className={styles.subtitle}>Author: {author}</Card.Subtitle>
    <Card.Subtitle className={styles.subtitle}>Published: {dateToStr(publishedDate)}</Card.Subtitle>
    <Card.Subtitle className={styles.subtitle}>Catetgory: {category}</Card.Subtitle>
    <Card.Text>
      {shortDescription}
    </Card.Text>
    <Button variant="primary" className={styles.button} as={Link} to={'/post/' + id}>Read More</Button>
  </Card>
)

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  publishedDate: PropTypes.object.isRequired,
  shortDescription: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default PostCard;