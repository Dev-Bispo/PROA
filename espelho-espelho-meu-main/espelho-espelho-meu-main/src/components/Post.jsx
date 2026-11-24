import { useState } from 'react'
import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi'

function Post({ post, onLike, onComment }) {
  const [comment, setComment] = useState('')
  const comments = post.comments || []

  function submitComment(event) {
    event.preventDefault()
    const text = comment.trim()
    if (!text) return
    onComment(text)
    setComment('')
  }

  return (
    <article className="post">
      <header className="post__header">
        <img className="post__avatar" src={post.avatar} alt={`Perfil de ${post.user}`} />
        <div className="post__user"><strong>{post.user}</strong><span>{post.location}</span></div>
        <button className="icon-button post__more" type="button" aria-label="Mais opções"><FiMoreHorizontal /></button>
      </header>
      <div className="post__photo-wrap">
        <img className="post__image" src={post.image} alt={post.alt} loading="lazy" />
        <span className="post__car-label">{post.car}</span>
      </div>
      <div className="post__content">
        <div className="post__actions">
          <button className={`icon-button like-button${post.liked ? ' is-liked' : ''}`} type="button" aria-label={post.liked ? 'Descurtir publicação' : 'Curtir publicação'} aria-pressed={Boolean(post.liked)} onClick={onLike}>
            <FiHeart />
          </button>
          <a className="icon-button" href={`#comment-${post.id}`} aria-label="Ir para comentários"><FiMessageCircle /></a>
          <button className="icon-button" type="button" aria-label="Compartilhar publicação" onClick={() => navigator.clipboard?.writeText(window.location.href)}><FiSend /></button>
          <button className="icon-button post__save" type="button" aria-label="Salvar publicação"><FiBookmark /></button>
        </div>
        <p className="post__likes"><strong>{post.likes + (post.liked ? 1 : 0)} curtidas</strong></p>
        <p className="post__caption"><strong>{post.user}</strong> <span className="post__car-name">{post.car}</span> — {post.caption}</p>
        <section className="comments" aria-label={`Comentários de ${post.user}`}>
          {comments.map((item) => <p className="comment" key={item.id}><strong>{item.user}</strong> {item.text}</p>)}
        </section>
        <form className="comment-form" id={`comment-${post.id}`} onSubmit={submitComment}>
          <label className="sr-only" htmlFor={`comment-input-${post.id}`}>Escreva um comentário</label>
          <input id={`comment-input-${post.id}`} value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Comente sobre esse carro..." maxLength={240} />
          <button type="submit" disabled={!comment.trim()}>Publicar</button>
        </form>
      </div>
    </article>
  )
}

export default Post
