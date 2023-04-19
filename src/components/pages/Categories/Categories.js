import styles from './Categories.module.scss';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = useSelector(getAllCategories)

  return (
    <div className={styles.homeContainer}>
      <div className={styles.categoriesContainer}>
        <h1>All Categories</h1>
        <ListGroup>
          {categories.map(category => (
            <ListGroup.Item key={category}>
              <Link to={'/categories/' + category}>{category}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  )
}

export default Categories;