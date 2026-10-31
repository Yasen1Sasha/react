export default function FilterBar({

}){
const filterButtons = [
    {id: 'all', label: "Усі"},
    {id: 'hero', label: "Лише герої"},
    {id: 'book', label: "Лише книги"}
]

return(
<div className="toolbar">
    <span className="badge">Усього:</span>
    <span className="badge">Герої: </span>
    <span className="badge">Книги: </span>

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