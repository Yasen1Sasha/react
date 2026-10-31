export default function HeroCard({
    name, power, level, image, skills = {}, info = {}, onHello, onAdd, isAdded, children
}){    
    return (
        <article className="">
            <img 
                className="cover" 
                src={image} 
                alt={`Зображення героя: ${name}`}
                loading="lazy"
                decoding="async"
            />
            <h3>{name}</h3>
            <p>Сила: {power}</p>
            <p>Рівень: {level}</p>

            {skills.length ? <div className="row">{skills.map(
                (s, i) => <span key={i} className="tag">{s}</span>)}</div> : null}

            {info?.city ? <p className="muted">Місто: {info.city}</p>: null}

            {children}

            <div className="row">
                { onHello && <button className="button" onClick={onHello}>
                    Привітатися
                </button>
                }
                { onAdd && <button className="button" onClick={onAdd} disabled={isAdded}>
                    {isAdded ? 'В обраному' : 'Додати в обране'}
                </button>
                }
            </div>
        </article>
    )
}