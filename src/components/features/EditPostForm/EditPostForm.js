import PostForm from "../PostForm/PostForm";
import { getPostById, editPost } from '../../../redux/postsRedux';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Navigate } from "react-router-dom";

const EditPostForm = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));
  const navigate = useNavigate();
  console.log(post);

  const handleSubmit = post => {
    dispatch(editPost({ ...post, id }));
    navigate('/')
  };

  if (!post) return <Navigate to='/' />

  return (
    <PostForm
      action={handleSubmit}
      actionText='Edit'
      pageTitle={'Edit Post'}
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      shortDescription={post.shortDescription}
      content={post.content} />
  )
}

export default EditPostForm;