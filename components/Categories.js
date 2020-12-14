import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Categories() {
  return (
    <ul className={styles.categories}>
      <li className={styles.categoryButton}>
        <Link href="/category/business">
          Economie
        </Link>
      </li>
      <li className={styles.categoryButton}>
        <Link href="/category/entertainment">
          <a>Divertissement</a>
        </Link>
      </li>
      <li className={styles.categoryButton}>
        <Link href="/category/health">
          <a>Santé</a>
        </Link>
      </li>
      <li className={styles.categoryButton}>
        <Link href="/category/science">
          <a>Science</a>
        </Link>
      </li>
      <li className={styles.categoryButton}>
        <Link href="/category/sports">
          <a>Sport</a>
        </Link>
      </li>
      <li className={styles.categoryButton}>
        <Link href="/category/technology">
          <a>Technologie</a>
        </Link>
      </li>
    </ul>
  )
}

export default Categories