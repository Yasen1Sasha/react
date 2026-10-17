import {useState, useMemo} from 'react';
import './App.css';
import BookCard from './components/BookCard';

function App() {
   
const [heroes] = useState([
  { id: 1, name: 'Batman', power: 'Detective', image: 'https://picsum.photos/seed/bat/600/400', level: 90, skills:['detective','martial arts'], info:{city:'Gotham'} },
  { id: 2, name: 'Superman', power: 'Strength',  image: 'https://picsum.photos/seed/sup/600/400', level: 98, skills:['flying','laser eyes'], info:{city:'Metropolis'} },
  { id: 3, name: 'Wonder Woman', power: 'Agility', image: 'https://picsum.photos/seed/ww/600/400', level: 92, skills:['agility','lasso'], info:{city:'Themyscira'} }
]);

const [books] = useState([
  { id: 101, title: 'The Long Halloween', author: 'Jeph Loeb', image: 'https://picsum.photos/seed/b1/600/400' },
  { id: 102, title: 'All-Star Superman', author: 'Grant Morrison', image: 'https://picsum.photos/seed/b2/600/400' },
  { id: 103, title: 'Wonder Woman: Year One', author: 'G. Rucka', image: 'https://picsum.photos/seed/b3/600/400' }
]);

const [favorites, setFavorites] = useState([]);
const [filter, setFilter] = useState('all');
const [query, setQuery] = useState('');

const favoriteBookIds = useMemo(
    () => new Set(favorites.filter(f => f.type === "Book").map(f => f.id)), 
    [favorites]
);
    

function addBookToFavorites(book) {
    setFavorites(prev =>{
        const exists = prev.some(it => it.book==="Book" && it.id===book.id);
        
        return exists ? prev : [
            ...prev, 
            {type:"Book", id: book.id, label: `${book.title} - ${book.author}`}
        ]
    });
}

return(
    <div>
        <section>
            <h2>Heroes</h2>
            <div className="grid">
                {heroes.map(b => (             
                <BookCard 
                    key={b.id}
                    title={b.title}
                    author={b.author}
                    image={b.image}
                    onAdd={() => addBookToFavorites(b)}
                    isAdded={favoriteBookIds.has(b.id)}
                />    
                ))}
            </div>
        </section>
    </div>
)

}
