import React, {useState} from "react";

function Deletable() {
    const [items, setItems] = useState(["Ябліко", "банан", "апельсин", "виноград"]);

    const handleDelete = (indexToDelete) => { 
        const newItems = items.filter((item, index) => index !== indexToDelete);
        setItems(newItems);
    }

    return (
        <div>
           
            <h3>Список елементів</h3>
            <ul> 
                {
                items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleDelete(index)}>
                           Видалити
                        </button>
                    </li>        
                ))
                }
            </ul>
            
        </div>            
    );            

}
export default Deletable;