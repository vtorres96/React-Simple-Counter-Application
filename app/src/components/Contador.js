import React, { useState } from 'react';

import './Contador.css';

const Contador = () => {

    const [count, setCount] = useState(0);

    return(
        <div className="container">
            <h1>Contador em ReactJS</h1>
            <span>{count}</span>
            <div className="botoes">
                <button onClick={() => setCount(count + 1)}>Incrementar</button>
                <button onClick={() => setCount(count - 1)}>Decrementar</button>
            </div>
        </div>
    )
}

export default Contador;


