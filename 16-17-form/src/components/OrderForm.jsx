import { useState } from 'react'

function OrderForm() {
    const [formData, setFormData] = useState({
        name: '',
        foodType: 'pizza',
        sauce: 'tomato',
        deliveryMethod: 'pickup',
        extraCheese: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <h2>Замовлення їжі</h2>

                <label>
                    Ім'я:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>

                <label>
                    Тип їжі:
                    <select name="foodType" value={formData.foodType} onChange={handleChange}>
                        <option value="pizza">Піца</option>
                        <option value="pasta">Бургер</option>
                        <option value="salad">Суші</option>
                    </select>
                </label>

                <label>
                    Соус:
                    {formData.foodType === 'pizza' && (
                        <select name="sauce" value={formData.sauce} onChange={handleChange}>
                            <option value="tomato">Томатний</option>
                            <option value="alfredo">Альфредо</option>
                            <option value="pesto">Песто</option>
                        </select>
                    )}
                </label>

                <label>
                    Спосіб доставки:
                    <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange}>
                        <option value="pickup">Самовивіз</option>
                        <option value="delivery">Доставка</option>
                    </select>
                </label>

                <label>
                    Додати додатковий сир:
                    <input
                        type="checkbox"
                        name="extraCheese"
                        checked={formData.extraCheese}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Надіслати</button>
            </form>
        </div>
    );
}

export default OrderForm;