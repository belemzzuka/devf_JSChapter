export class Persona{
    constructor({
        nombre,
        apellido,
        edad,
        direccion,
        usuario,
        contrasena,
        email,
        nacionalidad = "Mexicana" //nacionalidad se agrega como valor por defecto en persona, lo hereda a alumno y a profesor.
    }){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.email = email;
        this.nacionalidad = nacionalidad; //hay que agregarlo a los this
    }

    login(){
        console.log(`El usuario ${this.usuario} inicio sesion`);
    }
}