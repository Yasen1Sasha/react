import React, {useState} from "react";
import {Link} from "react-router-dom";
import './RegistrationPage.css'

function RegistrationPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showEmailField, setShowEmailField] = useState(false);
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleAgeChange = (e) => {
        setAge(e.target.value);
        setAge(age);

        const showEmail = parseInt(age, 10) >= 18;
        setShowEmailField(showEmail);
    };


    return (
        <div>
            <h1>Реєстрація</h1>
            <form onSubmit={handleSubmit}>
                    <label>
                        Ім'я:
                        <input
                        type="text"
                         value={name}
                          onChange={handleNameChange}
                          required
                     />
                    </label>
                    <label>
                        Вік:
                        <input
                            type="number"
                            value={age}
                            onChange={handleAgeChange}
                            required
                        />
                    </label>
                    <button type="submit">Зареєструватися</button>
                </form>
            </div>




    ) }


export default RegistrationPage