import {Persona} from "./persona.js"

export class Alumno extends Persona {
    constructor({
        nombre,
        apellido,
        edad,
        direccion,
        usuario,
        contrasena,
        email,
        promedio,
        asistencias,
        nacionalidad //se agrega al constructor para cambiar el valor por defecto
    }){
        //El super constructor va a crear el constructor de la clase padre (Persona) porque no podemos tener dos constructores
        super({nombre,apellido,direccion,usuario,contrasena,email,edad,nacionalidad}) //se agrega nacionalidad aqui tambien
            this.promedio = promedio;
            this.asistencias = asistencias;
    }
    
    obtenerPromedio(){
        console.log(`el alunos ${this.usuario} tiene el promedio de ${this.promedio}`);
    }
}