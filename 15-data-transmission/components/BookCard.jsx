export default function BookCard(
  { title, author, image, onAdd, isAdded=false }){
  return (
    <article className="card">
      <img
        className="cover"
        src={image}
        alt={`Обкладинка: ${title}`}
        loading="lazy"
        decoding="async"
      />
      <h3>{title}</h3>
      <p className="muted">
        Автор: {author}
      </p>
      <div className="row" style={{marginTop:8}}>
        <button className="button" onClick={onAdd} disabled={isAdded}>
          {isAdded ? 'В обраному' : 'Додати в обране'}
        </button>
      </div>
    </article>
  )
}