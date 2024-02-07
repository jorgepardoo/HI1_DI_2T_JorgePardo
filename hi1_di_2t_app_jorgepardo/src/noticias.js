import React from 'react';
import fAngular from './imagenes/angular.jpg'
import fReact from './imagenes/react-logo.jpg'
import fVue from './imagenes/vuejs.png'
import './styles/noticias.css';

function noticias() {
    return (
        <div className="noticias">
            <h1>Noticias</h1>
            <h2>Ultimos aprendizajes en la materia de Desarrollo de Interfaces.</h2>
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={fReact} class="d-block w-100" alt="foto react" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={fAngular} class="d-block w-100" alt="foto angular" />
                    </div>
                    <div class="carousel-item">
                        <img src={fVue} class="d-block w-100" alt="foto vue" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default noticias;