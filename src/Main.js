import React from 'react';
import './App.css';

const Main = () => {

    return (
        <div className="App">
            <header className="App-header">
                <div className='"card mb-3'>
                    <img className='card-img-top' src={process.env.PUBLIC_URL + "/assets/boletarifa.jpeg"} alt="" />
                </div>
                <h3 className='card-title"' >Rifa Benefica</h3>
            </header>
        </div>

    );
};

export default Main;
