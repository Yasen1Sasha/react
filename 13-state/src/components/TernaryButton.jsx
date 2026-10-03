import React, {useState} from "react";

function TernaryButton() {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {

        setIsToggled(!isToggled);
    }

    return (
    <div>
        <button onClick={handleClick}>
            Перемикач
        </button>
        <p>
            Поточний стан
            <strong>{isToggled ? "Увімкнено" : "Вимкнено"}</strong>
        </p>
    </div>
    );

}
 
export default TernaryButton;