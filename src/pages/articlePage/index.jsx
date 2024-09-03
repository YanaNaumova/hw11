import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function ArticlePage() {
  const { userId, title, bodyArticle } = useParams();
  const navigate = useNavigate();
  function handelClick() {
    navigate("/");
  }
  return (
    <div className={styles.container}>
      <p className={styles.id}>{userId}</p>
      <h1>{title}</h1>
      <p className={styles.body}>{bodyArticle}</p>
      <button onClick={handelClick} className={styles.btn}>
        Назад
      </button>
    </div>
  );
}

export default ArticlePage;
