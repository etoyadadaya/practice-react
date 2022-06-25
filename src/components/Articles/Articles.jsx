import React from "react"
import styles from './Articles.module.scss'
import Header from "../Header/Header"

const Articles = () => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
      const fetchData = async() => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts')
          const data = await response.json()

          setPosts(data)

        } catch (error) {
          console.log(error)
        }
    }
    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <h1>Articles</h1>

      <div className={styles.wrapper}>
        {posts.map(post => (
        <div key={post.id} className={styles.card}>
          <img src="" alt=""/>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <a href="/">Read now</a>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Articles