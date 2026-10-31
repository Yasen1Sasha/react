export default function FavoritesList({
    items,
    onRemove,
    hasFavorites,
    ariaLabel = 'Список обраного'
}){
    if(!items || items.length === 0){
        return(
            <p className="">

            </p>
        )};
        return (
        <ul className="list" aria-label={ariaLabel}>
            {items.map((item)=>{
                <li 
                    key={`${item.type}-${item.id}`}
                    className="row"
                    style={{justifyContent: 'space-between'}}
                >
                    <div>

                    </div>
                    <button
                     type="button"
                     className="btn"
                     onClick={()=> onRemove(item)}
                    title="Видалити з обраного"
                    aria-label={`Видалити ${item.type} ${item.title || item.name} з обраного`}>
                        X
                    </button>
                </li>
            })}
        </ul>
    )

}