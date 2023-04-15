import styles from './PostForm.module.scss';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
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

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };


  return (
    <div className={styles.addPostContainer}>
      <h2 className={styles.addPostTitle}>{pageTitle}</h2>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", { required: true, minLength: 3 })}
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" placeholder="Enter Title" className={styles.subtitleInput}
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">This field is required, mininmum lenght is 3</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register("author", { required: true, minLength: 3 })}
            value={author}
            onChange={e => setAuthor(e.target.value)}
            type="text" placeholder="Enter Author" className={styles.subtitleInput}
          />
          {errors.author && <small className="d-block form-text text-danger mt-2">This field is required, mininmum lenght is 3</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Published</Form.Label>
          <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
          {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Short description</Form.Label>
          <Form.Control
            {...register("shortDescription", { required: true, minLength: 20 })}
            value={shortDescription}
            onChange={e => setShortDescription(e.target.value)}
            as="textarea" rows="5" type="text" placeholder="Leave a comment here"
          />
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required, mininmum lenght is 20</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Main content</Form.Label>
          <ReactQuill theme="snow" as="textarea" value={content} onChange={setContent} placeholder="Leave a comment here" />
          {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          {actionText}
        </Button>
      </Form>
    </div>
  )
}

export default PostForm;