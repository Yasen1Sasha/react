console.log('Скрипт запустився')

//Наші доступні курси
const courses = [
    {id:1, title:"Основи JavaScript", content:'', price: 150},
    {id:2, title:"React для початківців", content:'', price: 280},
    {id:3, title:"CSS Tailwind", content:'', price: 60},
    {id:4, title:"Python", content:'', price: 140},
    {id:5, title:"Redux & State Managment", content:'', price: 300},
];

// кошик
let cart = [];
 

//рендер списку доступних курсів
const renderCourses = () => {
    const productsList = document.getElementById('products-list');

    const courseHTML = courses.map( course => {

        return `
            <li>
                <span>${course.title} <strong>${course.price}</strong></span>
                <button onclick="addToCart(${course.id})">Додати</button>
            </li>      
        `;

       
    });



    productsList.innerHTML = courseHTML.join('');

};



const addToCart = (courseId) => {
    const courseToAdd = courses.find(course => course.id ===courseId);

    const newCartItem = {
        ...courseToAdd,
        cartId: Date.now() //унікальна мітка часу   
    } 

    cart = [...cart, newCartItem];

    console.log(cart);

    renderCart();
};


const renderCart = () => {
    const cartList = document .getElementById('cart-list');

    const cartHTML = cart.map(item => {
        return `
            <li>
                <span>${item.title}</span>
                <span>${item.price}</span>
                <button onclick="removeFromCart(${item.cartId})">Видалити</button>
            </li>  
        `;
    });

    cartList.innerHTML = cartHTML.length ? cartHTML.join('') : "<li>Кошик порожній</li>";
    
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price, 0
    );    

    document.getElementById('cart-total').innerText = '$' + totalPrice;

};


const removeFromCart = (cartItemId) => {

    cart = cart.filter(item => item.cartId !== cartItemId);

    renderCart();

};


//-------------------

renderCourses();
renderCart();
