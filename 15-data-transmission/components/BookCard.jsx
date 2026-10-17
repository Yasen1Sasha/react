export default function BookCard({
    title, author, image, onAdd, isAdded=false
}){
return (
    <article className="card">
        <img 
            src={image} 
            alt={`обложка: ${title}`}
            className="cover"
            loading="lazy"
            decoding="async"
            />
        <h3>{title}</h3>
        <p className="muted">Автор: {author}</p>
        <div className="actions">
            <button onClick={onAdd} disabled={isAdded}>
                {isAdded ? 'В избранном' : 'Добавить в избранное'}
            </button>
        </div>
    </article>
)}