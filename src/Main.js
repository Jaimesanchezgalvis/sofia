import React from 'react';
import './App.css';

const Main = () => {

    return (
        <div className="container mt-4">
            <h3 className='card-title'>Rifa Benefica:</h3>
            <img className='img-fluid boleta mt-3' src={process.env.PUBLIC_URL + "/assets/boletarifa.jpeg"} alt="" />
            <p>Creemos en la educación como medio de transformación, y cada niño o niña que se decide a transformar su mundo a través de la educación, es una generación prospera que cambia no solo su entorno si no las personas que la rodean.
                <br />
                <br />
                Sofia desde muy niña ocupa los primeros puestos en su colegio y su veros apetito de lectura le ha llevado a leer hasta un libro de mas de 200 páginas en poco mas que en 3 horas.
                <br />
                <br />
                Ella es una lectora habitual lo hace con libros en pdf desde su celular, por eso la familia Sanchez y Rodriguez queremos darle uno de los mejores regalos que puede tener una persona que es la posibilidad de continuar educándose con un libro electrónico o Kindle, es un dispositivo a través del cual puede tener cientos de libros y puede ayudarle para su futuro profesional.
                <br />
                <br />
                Si crees en el futuro, en la educación y en la posibilidad de soñar con una generación prospera que nos haga sentir orgullos te pedimos que nos ayudes para poder alcanzar la meta.
                <br />
                <br />
                Tenemos como objetivo vender 70 boletas, Sofia le encanta pintar y ella misa esta preparando una dibujo como premio al ganad@r.
                <br />
                <br />
                A continuación encontraras el listado de numero disponibles y las personas que ya hacen parte de esta causa, gracias por tu apoyo y con suerte y con tu ayuda alcanzaremos el objetivo. 😊
                <br />
            </p>
            <p align="center">
                <iframe title='rifasofia' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSmgYtjVhSOdHykuBHnpfz40raSKvahWgTaSmcuPV2e4KMnxMuhjEZRr-y_rFb6bycD4B-ZTnGP286Q/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

            </p>

        </div>

    );
};

export default Main;
