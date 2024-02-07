import React from 'react';
import './styles/formularios.css';

function registro() {
    return (
        <div className="registro">
            <h1>Registrarse</h1><br/>
            <form class="row g-3 needs-validation"  novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="Introduce un nombre" required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label"> Primer Apellido</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Introduce tu primer apellido" required />
                </div>
                <div class="col-md-4">
                <label for="validationCustom02" class="form-label"> Segundo Apellido</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Introduce tu segundo apellido" required />
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Correo</label>
                    <input type="text" class="form-control" id="validationCustom03" placeholder='Introduce tu correo' required />
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Contraseña</label>
                    <input type="text" class="form-control" id="validationCustom03" placeholder="Introduce tu contraseña" required />
                </div>
                <div class="col-md-4" id='boton'>
                    <button class="btn btn-primary" type="submit">Registrarse</button>
                </div>
            </form>
        </div>
    );
}
export default registro;