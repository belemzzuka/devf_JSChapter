var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
    ];

var currentUser = {};

    function login( nombre, password ){
        var invalidLogin = true;
        for (let i=0; i < cuentas.length; i++){
            let tmpCuentas = cuentas[i];
            if ((nombre.toLowerCase() === tmpCuentas.nombre.toLowerCase()) && (password === tmpCuentas.password)){
                let alert = document.getElementById("liveAlert");
                alert.classList.add("alert-primary");
                alert.innerText="Login Exitoso!!!";
                invalidLogin = false;
                // Desaparecer login inputs
                disappearLogin();
                appearOperations();
                currentUser = tmpCuentas;
                break;
            }
        }
        if (invalidLogin == true){
            let alert = document.getElementById("liveAlert");
            alert.classList.add("alert-danger");
            alert.textContent="Revisa tu usuario y/o contraseña";
        }
        setTimeout(function(){cleanMessage()}, 3000);
    };
    
    function cleanMessage(){
        let alert = document.getElementById("liveAlert");
        alert.classList.remove("alert-danger","alert-primary");
        alert.innerText="";
    };

    function disappearLogin(){
        let form = document.getElementById("login");
        form.hidden = true;
    };

    let operations = document.getElementById("operacionesBancarias");
    operations.hidden = true;

    function appearOperations(){
        let operations = document.getElementById("operacionesBancarias");
        operations.hidden = false;
    };
    
    let btnLogin = document.getElementById("btn-login");
    
    btnLogin.addEventListener("click", function(){
        //esta metiendo las variables a la funcion porque sino estarian en el scope global y las settea antes de hacer click. 
        //Metiendolas en la funcion toma lo que trae despues del click
        let usuario = document.getElementById("txt-user").value; //.value me trae el valor de la cajita
        let password = document.getElementById("txt-pass").value;
        login(usuario,password);
        }
    );

//OPERACIONES BANCARIAS

let mensajesConfirmacion = document.getElementById("mensajes-confirmacion");
let depositarCantidad = document.getElementById("depositar");
depositarCantidad.hidden = true;
let retirarCantidad = document.getElementById("retirar");
retirarCantidad.hidden = true;

//CONSULTAR SALDO
function consultarSaldo(usuario){
    mensajesConfirmacion.innerText = `Tu saldo es $${usuario.saldo}`;
};

let btnConsultar = document.getElementById("btnConsultar");
btnConsultar.addEventListener("click",function(){
    depositarCantidad.hidden = true;
    retirarCantidad.hidden = true;
    consultarSaldo(currentUser);
});

//DEPOSITAR DINERO
function depositarDinero(usuario, cantidad){
    let deposito = usuario.saldo + cantidad;
    if (deposito <= 990){
        for(let i=0; i<cuentas.length; i++){
            if(usuario.nombre===cuentas[i].nombre){
                cuentas[i].saldo += cantidad;
            }
        }
        depositarCantidad.hidden = true;
        mensajesConfirmacion.innerText = `La cantidad depositada fue $${cantidad}.
        Tu nuevo saldo es $${usuario.saldo}.`;
    } else {
        mensajesConfirmacion.innerText = "No puedes depositar esa cantidad, tu saldo no debe ser mayor a $990";
    }
}

let btnDepositar = document.getElementById("btnDepositar");
btnDepositar.addEventListener("click",function(){
    mensajesConfirmacion.innerText = "";
    retirarCantidad.hidden = true;
    let emptyInput = document.getElementById("txt-cantidad-depositar")
    emptyInput.value = 0;
    depositarCantidad.hidden = false;
});

let btnDepositarCantidad = document.getElementById("btn-depositar-cantidad");
btnDepositarCantidad.addEventListener("click",function(){
    let cantidad = parseInt(document.getElementById("txt-cantidad-depositar").value);
    depositarCantidad.hidden = true;
    depositarDinero(currentUser, cantidad);
});


//RETIRAR DINERO
function retirarDinero(usuario, cantidad){
    let retiro = usuario.saldo - cantidad;
    if (retiro >= 10){
        for(let i=0; i<cuentas.length; i++){
            if(usuario.nombre===cuentas[i].nombre){
                cuentas[i].saldo -= cantidad;
            }
        }
        retirarCantidad.hidden = true;
        mensajesConfirmacion.innerText = `La cantidad retirada fue $${cantidad}.
        Tu nuevo saldo es $${usuario.saldo}.`;
    } else {
        mensajesConfirmacion.innerText = "No puedes retirar esa cantidad, tu saldo es insuficiente";
    }
}

let btnRetirar = document.getElementById("btnRetirar");
btnRetirar.addEventListener("click",function(){
    mensajesConfirmacion.innerText = "";
    depositarCantidad.hidden = true;
    let emptyInput = document.getElementById("txt-cantidad-retirar")
    emptyInput.value = 0;
    retirarCantidad.hidden = false;
});

let btnRetirarCantidad = document.getElementById("btn-retirar-cantidad");
btnRetirarCantidad.addEventListener("click",function(){
    let cantidad = parseInt(document.getElementById("txt-cantidad-retirar").value);
    retirarCantidad.hidden = true;
    retirarDinero(currentUser, cantidad);
});

