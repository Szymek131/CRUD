import { Form, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from './AddPostForm.module.scss';
import { addPost } from "../../../redux/postsRedux";
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {

  const [title, setTitle] = useState('');
  const [author, setauthor] = useState('');
  const [published, setPublished] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({
      title: title,
      author: author,
      publishedDate: published,
      shortDescription: description,
      content: content
    }));
    setTitle('');
    setauthor('');
    setPublished('');
    setDescription('');
    setContent('');
    navigate('/');
  }

  return (
    <Container className={styles.addPostContainer}>
      <h2 className={styles.addPostTitle}>Add Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" className={styles.subtitleInput}
            value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter Author" className={styles.subtitleInput}
            value={author} onChange={e => setauthor(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Published</Form.Label>
          <Form.Control type="date" placeholder="Date" className={styles.subtitleInput}
            value={published} onChange={e => setPublished(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Short description</Form.Label>
          <Form.Control type="text" placeholder="Leave a comment here" className={styles.descriptionInput}
            value={description} onChange={e => setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Main content</Form.Label>
          <Form.Control type="text" placeholder="Leave a comment here" className={styles.contentInput}
            value={content} onChange={e => setContent(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          Add post
        </Button>
      </Form>
    </Container>
  )
}

export default AddPostForm;