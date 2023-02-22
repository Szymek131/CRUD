import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <Navbar bg="primary" variant='dark' className={styles.navBar}>
      <Navbar.Brand href='/' className={styles.navBarItem}>Blog.App</Navbar.Brand>
      <Nav className={styles.navBarList}>
        <Nav.Link as={NavLink} to="/" className={styles.navBarItem}>Home</Nav.Link>
        <Nav.Link as={NavLink} to="/about" className={styles.navBarItem}>About</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar;