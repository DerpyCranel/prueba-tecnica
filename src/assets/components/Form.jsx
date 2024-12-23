import React, { useState } from 'react';
function Form({onCalculate}){
    
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const n = parseInt(inputValue);
        onCalculate(n);

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Introduce el número:
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <button type="submit">Calcular</button>
        </form>
    );


    
}

export default Form;