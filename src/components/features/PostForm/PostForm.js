import styles from './PostForm.module.scss';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({ pageTitle, action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };


  return (
    <div className={styles.addPostContainer}>
      <h2 className={styles.addPostTitle}>{pageTitle}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" className={styles.subtitleInput}
            value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter Author" className={styles.subtitleInput}
            value={author} onChange={e => setAuthor(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Published</Form.Label>
          {/* <Form.Control type="text" placeholder="Date" className={styles.subtitleInput}
            value={publishedDate} onChange={e => setPublishedDate(e.target.value)} /> */}
          <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Short description</Form.Label>
          <Form.Control as="textarea" rows="5" type="text" placeholder="Leave a comment here"
            value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Main content</Form.Label>
          <ReactQuill theme="snow" as="textarea" value={content} onChange={setContent} placeholder="Leave a comment here" />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          {actionText}
        </Button>
      </Form>
    </div>
  )
}

export default PostForm;