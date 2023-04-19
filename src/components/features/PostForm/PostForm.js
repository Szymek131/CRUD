import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import ReactQuill from 'react-quill';

import { getAllCategories } from '../../../redux/categoriesRedux';

import "react-datepicker/dist/react-datepicker.css";
import 'react-quill/dist/quill.snow.css';
import styles from './PostForm.module.scss';

const initialPostValues = {
  title: '',
  author: '',
  shortDescription: '',
  content: '',
  category: '',
}

const PostForm = ({ pageTitle, action, actionText, initialValues = initialPostValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [author, setAuthor] = useState(initialValues.author);
  const [publishedDate, setPublishedDate] = useState(new Date());
  const [shortDescription, setShortDescription] = useState(initialValues.shortDescription);
  const [content, setContent] = useState(initialValues.content);
  const [category, setCategory] = useState(initialValues.category)

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const categories = useSelector(getAllCategories);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content, category });
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
          <Form.Label>Categories</Form.Label>
          <Form.Select aria-label="Default select example" onChange={e => setCategory(e.target.value)}>
            <option>Open this select menu</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </Form.Select>
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

PostForm.propTypes = {
  pageTitle: PropTypes.string,
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })
}

export default PostForm;