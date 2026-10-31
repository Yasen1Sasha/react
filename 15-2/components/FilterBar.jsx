export default function FilterBar({
    filter, setFilter,
    heroCount = 0, bookCount = 0, total = 0,
    query, setQuery

}){
    const filterButtons = [
        {id:'all', label:'Все'},
        {id:'hero', label:'Герои'},
        {id:'book', label:'Книги'},
    ]

    return (
        <div className="toolbar">
            <span className="label">усього:</span>
            <span className="label">герои:</span>
            <span className="label">книги:</span>

            {filterButtons.map(btn => (
                <button
                 key={btn.id}
                 type="button"   
                 className="btn">
                 onClick={() => setFilter(btn.id)}
                 aria-pressed={filter === btn.id}   

                {btn.label}
                </button>
            ))}
        </div>
    )
}