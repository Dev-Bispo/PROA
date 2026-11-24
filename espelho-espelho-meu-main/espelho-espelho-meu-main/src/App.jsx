import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Post from './components/Post'
import initialPosts from './data/posts.json'
import './App.css'
import NavDesktop from './components/NavDesktop'

const STORAGE_KEY = 'garagem-social-posts-v1'

function loadPosts() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (Array.isArray(saved) && saved.length) {
      return initialPosts.map((post) => ({
        ...post,
        ...(saved.find((item) => item.id === post.id) || {}),
      }))
    }
  } catch {
    // Se o armazenamento estiver indisponível ou inválido, inicia com os posts padrão.
  }
  return initialPosts.map((post) => ({ ...post, liked: false, comments: post.comments || [] }))
}

function App() {
  const [posts, setPosts] = useState(loadPosts)
  const [query, setQuery] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
    } catch {
      // A interface continua funcionando mesmo sem armazenamento local.
    }
  }, [posts])

  function updatePost(postId, update) {
    setPosts((current) => current.map((post) => post.id === postId ? update(post) : post))
  }

  function toggleLike(postId) {
    updatePost(postId, (post) => ({ ...post, liked: !post.liked }))
  }

  function addComment(postId, text) {
    updatePost(postId, (post) => ({
      ...post,
      comments: [...(post.comments || []), { id: `${Date.now()}-${Math.random()}`, user: 'voce', text }],
    }))
  }

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR')
    if (!normalizedQuery) return posts
    return posts.filter((post) =>
      `${post.user} ${post.location} ${post.car} ${post.caption}`.toLocaleLowerCase('pt-BR').includes(normalizedQuery),
    )
  }, [posts, query])

  return (
    <div className="app">
      <Header query={query} onSearch={setQuery} />
      <main className="page-content">
        <section className="welcome-card" aria-labelledby="welcome-title">
          <div>
            <span className="eyebrow">A comunidade de quem ama dirigir</span>
            <h1 id="welcome-title">Sua paixão tem lugar na <span>Garagem.</span></h1>
            <p>Encontros, projetos e histórias sobre quatro rodas.</p>
          </div>
          <div className="welcome-mark" aria-hidden="true">G</div>
        </section>
        <div className="feed-heading">
          <div><span className="eyebrow">Comunidade</span><h2>Novidades da estrada</h2></div>
          <span className="post-count">{filteredPosts.length} publicações</span>
        </div>
        <section className="feed" id="feed" aria-label="Feed de carros">
          {filteredPosts.length ? filteredPosts.map((post) => (
            <Post key={post.id} post={post} onLike={() => toggleLike(post.id)} onComment={(text) => addComment(post.id, text)} />
          )) : <p className="empty-state">Nenhum carro encontrado para “{query}”.</p>}
        </section>
      </main>
      <NavDesktop />
    </div>
  )
}

export default App




