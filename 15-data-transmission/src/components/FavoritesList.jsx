export default function FavoritesList({
    items,
    onRemove,
    hasFavorites,
    ariaLabel = 'Список обраного'
}){

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
                    <button>
                        X
                    </button>
                </li>
            })}
        </ul>
    )

}