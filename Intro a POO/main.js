//Clase Persona

/*
class Persona{
    //Puedes asignar valores por default dentro del constructor
    //constructor(nombre, apellido, edad, sexo, peso, nacionalidad="mexicana", esVegano)
    constructor(nombre, apellido, edad, sexo, peso, nacionalidad, esVegano){
        //atributos de la clase. Hay que asignarles un valor. Ese valor se le va a pasar del constructor.
        this._nombre = nombre;
        this._apellido = apellido; 
        this._edad = edad;
        this._sexo = sexo;
        this._peso = peso;
        this._nacionalidad = nacionalidad;
        this._esVegano = esVegano;
    }

    comer(){
        if(this._esVegano == true){
            return "Esta persona no puede comer alimentos de origen animal";
        } else {
            return "Esta persona puede comer todo";
        }
    }

    tomarAlcohol(){
        if(this._edad >= 18){
            return "Puedes tomar alcohol";
        } else {
            return "No puedes tomar";
        }
    }

//obtener el valor del atributo. Getter. Puedes quitarle el primer get, siempre y cuando tenga la palabra clave get el metodo
get getNombre() {
    return this._nombre;
}

//ponerle un valor al atributo. Setter
set setNombre(nombre){
    this._nombre = nombre;
}
}

//Se tienen que poner en el orden en el que pusiste el constructor. Si no pones alguno, es undefined.
const persona1 = new Persona("Luis", "Juarez", 30, "masculino", 60, "peruana", false);
const persona2 = new Persona("Lilia", "Perez", 12, "femenino", 45, "mexicano", true);

//mandar a llamar para imprimir los objetos definidos.
//console.log(persona1);
//console.log(persona2);

//se mandan a llamar como si fueran funciones. Primero mostramos el nombre de la persona, toma el de _ del this, no del constructor. Despues ejecuta el metodo como si ejecutara una funcion.
console.log(persona1._nombre, persona1.comer());
console.log(persona2._nombre, persona2.comer());
console.log(persona1._nombre, persona1.tomarAlcohol());
console.log(persona2._nombre, persona2.tomarAlcohol());


//imprimir lo de getter y setter
persona1.setNombre = "hola";
console.log(persona1.getNombre);
*/


class Alumnos {
    constructor(nombre, apellido, califFinal, inscrito){
        this._nombre = nombre;
        this._apellido = apellido;
        this._califFinal = 0;
        this._inscrito = inscrito;
        this._calificaciones = [];
    }

    ObtenerInicialesDeAlumno(){
        let inicialNombre = this._nombre[0];
        let inicialApellido = this._apellido[0];
        return (inicialNombre + inicialApellido);
    }

    ObtenerNombreCompleto(){
        return (this._nombre + " " + this._apellido);
    }

    Aprobado(){
        if (this._califFinal >= 6){
            return "Estas aprobado";
        } else {
            return "Estas reprobado";
        }
    }

    agregarCalificacion(materia, calificacion){
        this._calificaciones.push({
            materia: materia,
            calificacion: calificacion
        });
    }

    obtenerPromedio(){
        let promedio = 0;
        this._calificaciones.forEach(element => {
            promedio += (element.calificacion)/2;
        });
        this._califFinal = promedio;
        return `El promedio de ${this._nombre} es ${promedio}`;
    }
}

const alumno1 = new Alumnos("Belem", "Garrido", true);


alumno1.agregarCalificacion("mate",10);
alumno1.agregarCalificacion("español",8);
console.log(alumno1);

console.log(alumno1.ObtenerInicialesDeAlumno());
console.log(alumno1.ObtenerNombreCompleto());
console.log(alumno1.obtenerPromedio());
console.log(alumno1.Aprobado());