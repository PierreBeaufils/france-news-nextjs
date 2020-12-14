import styles from '../styles/Home.module.css'

function Article(post) {

  const setImage = () => {
    if (post.urlToImage !== null) {
      return post.urlToImage
    } else {
      return "/common.jpg"
    }
  }

  return (
    <a href={post.url} className={styles.card}>
      <img src={setImage()} alt="vignette" />
      <div className={styles.cardContent}>
        <h3>{post.title}</h3>
        <div className={styles.cardDescription}>{post.description}</div>
      </div>
    </a>
  )
}

export default Article