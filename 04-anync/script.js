console.log('- Start!');


// крок 1
function runStep1(n) {
    console.log("Крок 1. Початок - синхронний і асинхронний 'timeout'");

    setTimeout(()=>{
        console.log("Крок 1. Середина.");    
    }, 0);

    console.log("Крок 1. Кінець.");
}

// Крок 2.
function runStep2() {
    console.log("Крок 2. Простий виклик");

    const makeOrder = (dish, callback) => {
        console.log(`Кухар починає готувати: ${dish}`);
        callback();
    }

    const runBlocking = () => {
        console.warn("Початок приготування ...");

        const start = Date.now();

        while (Date.now() - start < 2000) {   }

        console.warn("Приготування закінчено.");
    }

    makeOrder("Піца", () => {
        runBlocking();
        console.log("Кліент. Замовлення готове!");
    });
}


// Крок 3.
function runStep3(){
    console.log("Починаємо готувати ....");

    setTimeout(()=>{
        console.log("1. Дістали інгредієнти");

        setTimeout(()=>{
            console.log("2. Смажемо котлету");

            setTimeout(()=>{
                console.log("3. Котлета готова!");
            }, 500);

        }, 1500);    

    }, 1000);
}

// --------------------------------
// Крок 4.

function runStep4() {
    console.log("-- Створення Promise");

    const promise = new Promise((resolv, reject) => {
        console.log("Бариста починає готувти каву ...");
        setTimeout(() => {
            const isMilkAvailable = false;
            
            if (isMilkAvailable){
                resolv("Ваше капучино готове!");
            } else {
                reject("Вибачте, закінчилося молоко");
            }
        }, 2000);
    });

    promise
        .then(msg => console.log(msg))
        .catch(err => console.log(err))
        .finally(() => console.log("Завершено!"));

    console.log("-- Закінчення Promise");
}

// --------------------------------
// Крок 5.
function runStep5(number=1) {
    console.log("-- Ланцюжок промісів");
    
    new Promise(res => res(number)) 
    .then(num => {
        console.log(`Отримали ${num}, множимо на 2`);
        return num * 2;
    })
    .then(num => {
        console.log(`Отримали ${num}, додаємо 4`);
        return num + 4;
    })
    .then( res => {
        console.log(`Фінальний результат = ${res}`);
    });
}


// --------------------------------
// Крок 6.
function runStep6(){
    console.log('-- Починаємо паралельне завантаження');

    const startTimer = Date.now();

    const task1 = new Promise(
        res => setTimeout(()=>{
            console.log('Задача 1 виконана');
            res("Задача 1");
        }, 2000)
    );    
    const task2 = new Promise(
        res => setTimeout(()=>{
            console.log('Задача 2 виконана');
            res('Задача 2')
        }, 1000)
    );
    const task3 = new Promise(res => setTimeout(()=>{
            console.log('Задача 3 виконана');
            res('Задача 3')
        }, 3000)
    );

    Promise.all([task1, task2, task3])
    .then(result => {
        const time = ((Date.now() - startTimer) / 1000)
        .toFixed(1);

        console.log(`Всі задачі виконано: ${result.join(', ')}`)

        console.warn(`Загальний час: ${time}`);
    });
}


// --------------------------------
// Крок 7.
function runStep7(){
    console.log('-- Мікрозадчі і макрозадачі');
    // 1
    setTimeout(() => console.warn("Макрозадача через setTime"), 0);
    // 2
    Promise.resolve().then(
        () => console.log('Мікрозадача через проміс')
    );
}


// --------------------------------
// Крок 8.

async function runStep8() {
    console.log('-- async / await');

    try {
        console.log('Запитуєму користувача ...');

        const response = 
          await fetch("https://jsonplaceholder.typicode.com/user/3");

        const data 
    } catch {

    }
};



console.log('- End!');