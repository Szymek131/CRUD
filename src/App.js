import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import AddPost from "./components/pages/AddPost/AddPost";
import EditPost from "./components/pages/EditPost/EditPost";
import SinglePost from "./components/pages/SinglePost/SinglePost";
import NotFound from "./components/pages/NotFound/NotFound";
import { Container } from "react-bootstrap";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:id' element={<SinglePost />} />
          <Route path='/post/add' element={<AddPost />} />
          <Route path='/post/:postId/edit' element={<EditPost />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;