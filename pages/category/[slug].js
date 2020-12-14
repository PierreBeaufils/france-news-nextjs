import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Article from '../../components/Article'
import Categories from '../../components/Categories'

export default function Category({ posts }) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className={styles.container}>
      <Head>
        <title>France News - {slug}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.navbar}>
          <Link href="/">
            <a>
              <h2 className={styles.title}>
                France News
          </h2>
            </a>
          </Link>
        </div>

        <Categories />

        <div className={styles.grid}>
          {posts.map((post) => (
            <Article key={post.url} {...post} />
          ))}
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div >
  )
}

export async function getStaticProps({ params }) {
  const slug = params.slug

  const res = await fetch(`http://newsapi.org/v2/top-headlines?country=fr&category=${slug}&apiKey=${process.env.API_KEY}`)
  const response = await res.json()
  const posts = response.articles

  return {
    props: {
      posts,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'business' } },
      { params: { slug: 'health' } },
      { params: { slug: 'entertainment' } },
      { params: { slug: 'science' } },
      { params: { slug: 'sports' } },
      { params: { slug: 'technology' } }
    ],
    fallback: true
  };
}