import { useState } from 'react';
function ValidationForm() {
    const [formData, setFormData] = useState({email: '', password: ''}); 
    const [errors, setErrors] = useState({email: '', password: ''});
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {email: '', password: ''};
        if (!formData.password.length >= 6) {
            newErrors.password = 'Пароль має бути більше 6 символів';
        }
        if (!formData.email) {
            newErrors.email = 'Email обов\'язковий';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };
    
    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <h2>Валідація форми</h2>
                <label>
                    Email:
                    <input type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}/>
                    {errors.email && <span className="error">
                    {errors.email}</span>} 
                    
                </label>
                <label>
                    Пароль:
                    <input type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange} />
                    {errors.password && <span className="error">
                        {errors.password}</span>}
                </label>
                <button type="submit">Надіслати</button>
            </form>
        </div>
    );
}

export default ValidationForm;