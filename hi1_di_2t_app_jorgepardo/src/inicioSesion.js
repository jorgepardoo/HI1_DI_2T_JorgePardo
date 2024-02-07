import React from 'react';
import './styles/formularios.css';

function inicio() {
    return (
        <div className="inicio">
            <h1>Inicio</h1><br/>
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-12">
                    <label for="validationCustom03" class="form-label">Correo</label>
                    <input type="text" class="form-control" id="validationCustom03" placeholder='Introduce tu correo' required />
                </div>
                <div class="col-md-12">
                    <label for="validationCustom03" class="form-label">Contraseña</label>
                    <input type="text" class="form-control" id="validationCustom03" placeholder="Introduce tu contraseña" required />
                </div>
                <div class="col-md-4" id='boton'>
                    <button class="btn btn-primary" type="submit">Inicias Sesion</button>
                </div>
            </form>

        </div>
    );
}

export default inicio;