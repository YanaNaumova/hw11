import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import ArticleList from "./pages/articleList";
import ArticlePage from "./pages/articlePage";
import Navbar from "./components/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import ArticleContext from "./context/ArticleContext";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const posts = await axios.get(url);
      setPosts(posts.data);
      return posts;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <ArticleContext.Provider value={{ posts }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/articleList" element={<ArticleList />} />
          <Route
            path="/articlPage/:userId/:title/:bodyArticle"
            element={<ArticlePage />}
          />
        </Routes>
      </div>
    </ArticleContext.Provider>
  );
}

export default App;
