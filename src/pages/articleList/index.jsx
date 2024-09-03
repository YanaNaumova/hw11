import { Link } from "react-router-dom";
import { useContext } from "react";
import ArticleContext from "../../context/ArticleContext";
import styles from "./styles.module.css";

function ArticleList() {
  const { posts } = useContext(ArticleContext);
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <ul key={post.id}>
            <li>
              <Link to={`/articlPage/${post.id}/${post.title}/${post.body}`}>
                {post.title}
              </Link>
              ;
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default ArticleList;
