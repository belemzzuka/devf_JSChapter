var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
    ];

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
                break;
            }
        }
        if (invalidLogin == true){
            let alert = document.getElementById("liveAlert");
            alert.classList.add("alert-danger");
            alert.textContent="Revisa tu usuario y/o contraseña";
        }
        setTimeout(function(){cleanMessage()}, 3000);
    }
    
    function cleanMessage(){
        let alert = document.getElementById("liveAlert");
        alert.classList.remove("alert-danger","alert-primary");
        alert.innerText="";
    }

    function disappearLogin(){
        let form = document.getElementById("login");
        form.hidden = true;
    }

    let operations = document.getElementById("operacionesBancarias");
        operations.hidden = true;
    function appearOperations(){
        let operations = document.getElementById("operacionesBancarias");
        operations.hidden = false;
    }
    
    
    let btnLogin = document.getElementById("btn-login");
    
    btnLogin.addEventListener("click",function(){
        //esta metiendo las variables a la funcion porque sino estarian en el scope global y las settea antes de hacer click. 
        //Metiendolas en la funcion toma lo que trae despues del click
        let usuario = document.getElementById("txt-user").value; //.value me trae el valor de la cajita
        let password = document.getElementById("txt-pass").value;
        login(usuario,password);
    }
    );