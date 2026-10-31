import { useState, useMemo } from 'react'
import './App.css'
import BookCard from './components/BookCard.jsx'
import HeroCard from './components/HeroCard.jsx';
import FilterBar from './components/FilterBar.jsx';
import FavoritesList from './components/FavoritesList.jsx';

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

  const favoriteBooksIds = useMemo(
    () => new Set(favorites.filter(f => f.type === "Book").map(f => f.id)),
    [favorites]
  )

  function addBookToFavorites(book){
    setFavorites(prev => {
      const exists = prev.some(it => it.type==="Book" && it.id===book.id);
      console.log('B', prev)
      return exists ? prev : [
        ...prev,
        {type:'Book', id: book.id, label: `${book.title} - ${book.author}`}
      ]
    })
  }

  // HEROES

  function sayHello(name) {
    alert(`Привіт, я ${name}`)
  }

  function addHeroToFavorites(hero) {
    setFavorites(prev => {
      const exists = prev.some(it => it.type==="Hero" && it.id===hero.id);
      console.log('H', prev)
      return exists ? prev : [
        ...prev,
        {type:'Hero', id: hero.id, label: `${hero.name} - ${hero.power}`}
      ]
    })
  }

  const favoriteHeroIds = useMemo(
    () => new Set(favorites.filter(f => f.type === "Hero").map(f => f.id)),
    [favorites]
  );

  const total = favorites.length;
  const bookCount = favorites.filter(i => i.type === "Book").length;
  const heroCount = favorites.filter(i => i.type === "Hero").length;

  const filteredFavorites = useMemo(() =>{
    let items = favorites; 
    if(filter === 'hero') items = items.filter(i => i.type==="Hero");
    if(filter === 'book') items = items.filter(i => i.type==="Book");

  });

  function removeFromFavorites(item){
    setFavorites(prev => prev.filter(
      it => !(it.type===item.type && it.id===item.id)
    ));
  }


  return (
    <div>
      <section>
        <h2>Книги</h2>
        <div className='grid'>
          {books.map(b => (
            <BookCard 
              key={b.id}
              title={b.title}
              author={b.author}
              image={b.image}
              onAdd={() => addBookToFavorites(b)}
              isAdded={favoriteBooksIds.has(b.id)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Герої</h2>
        <div className='grid'>
          {heroes.map(h =>(
            <HeroCard
              key={h.id}
              name={h.name}
              power={h.power}
              level={h.skills}
              image={h.image}
              skills={h.skills}
              info={h.info}

              onHello={()=> sayHello(h.name)}
              onAdd={()=> addHeroToFavorites(h)}
              isAdded={favoriteHeroIds.has(h.id)}
            >

            </HeroCard>
          ))}
        </div>
      </section>

      <section>
        <h2>Фільтри</h2>
        <FilterBar 
          filter={filter}
          setFilter={setFilter}
          heroCount={heroCount}
          bookCount={bookCount}
          total={total}
          query={query}
          setQuery={setQuery}
        />
        <FavoritesList
          items={filteredFavorites}
          onRemove={removeFromFavorites}
          hasFavorites={favorites.length > 0}
          ariaLabel='Список обраного'
        />
      </section>
    </div>
  )
}

export default App
