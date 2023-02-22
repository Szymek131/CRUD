import styles from './Post.module.scss';
import { getPostById, removePost } from '../../../redux/postsRedux';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { Container, Button, } from 'react-bootstrap';
import DeletePostModal from '../DeletePostModal/DeletePostModal';
import { useState } from 'react';

const Post = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));
  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState(false);

  const deletePost = e => {
    e.preventDefault();
    dispatch(removePost(id));
    navigate('/');
  }

  if (!post) return <Navigate to='/' />

  return (
    <Container>
      <div className={styles.titleContainer}>
        <div className={styles.postContainer}>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <span><strong>Author: </strong> {post.author}</span>
          <p><strong>Published: </strong> {post.publishedDate}</p>
          <span>{post.content}</span>
        </div>
        <div className={styles.buttonContainer}>
          <Button variant="outline-info" className={styles.button}>Edit</Button>
          <Button onClick={() => setModalShow(true)} variant="outline-danger" className={styles.button}>Delete</Button>
        </div>
      </div>
      <DeletePostModal show={modalShow} onHide={() => setModalShow(false)} deletePostAction={deletePost} />
    </Container>
  )
};

export default Post;