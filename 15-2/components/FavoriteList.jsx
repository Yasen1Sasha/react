export default function FavoriteList({
    items = [], onRemove, hasFavorites, ariaLabel = 'Список обраного' 
}){
    return (
        <ul className="list" aria-label={ariaLabel}>
            {items.map(item => (
                <li key={`${item.type}-${item.id}`}
                 className="row"
                 style={{justifyContent:'space-between', alignItems:'center'}}>
                    <div>

                    </div>
                    <button>
                        X
                    </button>
                </li>
            ))}
        </ul>
    )


}