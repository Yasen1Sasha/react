export default function FilterBar({
    filter,
    setFilter,
    heroCount = 0,
    bookCount = 0,
    total = 0,
    query,
    setQuery
}){
const filterButtons = [
    {id: 'all', label: "Усі"},
    {id: 'hero', label: "Лише герої"},
    {id: 'book', label: "Лише книги"}
]

return(
<div className="toolbar">
    <span className="badge">Усього: {total}</span>
    <span className="badge">Герої: {heroCount}</span>
    <span className="badge">Книги: {bookCount}</span>

    {filterButtons.map(btn => (
        <button
            key={btn.id}
            type="button"
            className=""
        >
            {btn.label}
        </button>
    ))}
</div>
)}