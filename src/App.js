import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import AddPost from "./components/pages/AddPost/AddPost";
import EditPost from "./components/pages/EditPost/EditPost";
import SinglePost from "./components/pages/SinglePost/SinglePost";
import NotFound from "./components/pages/NotFound/NotFound";
import Categories from "./components/pages/Categories/Categories";
import Category from "./components/pages/Category/Category";
import { Container } from "react-bootstrap";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

const App =() => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:id' element={<SinglePost />} />
          <Route path='/post/add' element={<AddPost />} />
          <Route path='/post/edit/:id' element={<EditPost />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:category' element={<Category />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;