var usuarios = [
    {
        name:"Carlos",
        usuario:"carlos@gmail.com",
        pwd:"pwd123"
    },
    {
        name:"Jorge",
        usuario:"jorge@gmail.com",
        pwd:"pwd123"
    }
];


function login( correo, password ){
    var flagAlert = true;
    for (let i=0; i < usuarios.length; i++){
        let tmpUsuario = usuarios[i];
        if ((correo.toLowerCase() === tmpUsuario.usuario.toLowerCase()) && (password === tmpUsuario.pwd)){
            let alert = document.getElementById("liveAlert");
            alert.classList.add("alert-primary");
            alert.innerText="Login Exitoso!!!";
            flagAlert = false;
            break;
        }
    }
    if (flagAlert == true){
        let alert = document.getElementById("liveAlert");
        alert.classList.add("alert-danger");
        alert.textContent="Revisa tu usuario y contraseña";
    }
    setTimeout(function(){cleanMessage()}, 3000);
}

function cleanMessage(){
    let alert = document.getElementById("liveAlert");
    alert.classList.remove("alert-danger","alert-primary");
    alert.innerText="";
}


let btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click",function(){
    //esta metiendo las variables a la funcion porque sino estan en el scope global y las settea antes de hacer click. Metiendolas en la funcion toma lo que trae despues del click
    let usuario = document.getElementById("txt-user").value; //.value me trae el valor de la cajita
    let password = document.getElementById("txt-pass").value;
    login(usuario,password);
}
);