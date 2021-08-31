//PILARES DE POO
//HERENCIA

import {Persona} from "./persona.js"

export class Profesor extends Persona{
    constructor({
        nombre,
        apellido,
        edad,
        direccion,
        materias,
        usuario,
        contrasena,
        email,
        salario

    }){
        super({nombre,apellido,edad,direccion,materias,usuario,contrasena,email})
        this.salario = salario;
    }

}