export default function BookCard({
    title, author, image, onAdd, isAdded=false
}) {
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
            <p>Автор: {author}</p>
            <div className="button" onClick={onAdd} disabled={isAdded}>
                <button>
                {isAdded ? 'В обраному': 'Додати в обране'}
                </button>
            </div>
        </article>
    )
}