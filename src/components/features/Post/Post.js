import styles from './Post.module.scss';
import { getPostById, removePost } from '../../../redux/postsRedux';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { Container, Button, } from 'react-bootstrap';
import DeletePostModal from '../Modal/Modal';
import { useState } from 'react';

const Post = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));
  const [modalVisibility, setmodalVisibility] = useState('none');

  const deletePost = e => {
    e.preventDefault();
    dispatch(removePost(id))
  }

  const showModal = () => {
    setmodalVisibility('block');
  }

  const hideModal = () => {
    setmodalVisibility('none');
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
          <Button onClick={showModal} variant="outline-danger" className={styles.button}>Delete</Button>
        </div>
      </div>
      <DeletePostModal show={modalVisibility} hideModalAction={hideModal} deletePostAction={deletePost} />
    </Container>
  )
};

export default Post;