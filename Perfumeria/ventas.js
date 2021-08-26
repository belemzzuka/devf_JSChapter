const perfumes = [
    {
        nombrePerfume:"Aqua",
        precioPerfume:200
    },
    {
        nombrePerfume:"Emoción",
        precioPerfume:180
    },
    {
        nombrePerfume:"Alegría",
        precioPerfume:160
    },
    {
        nombrePerfume:"Frescura",
        precioPerfume:150
    }
];

const vendedores = ["Juana","Pedro"];

let perfumesVendidos_Juana = [];
let perfumesVendidos_Pedro = [];

    for(let i=0; i<vendedores.length; i++){
        alert("Ingrese datos de venta de " + vendedores[i]);
        if( vendedores[i] === "Juana"){
            for(let x=0; x<perfumes.length; x++){
                perfumesVendidos_Juana.push(parseInt(prompt(`Ingrese la cantidad de ${perfumes[x].nombrePerfume} vendidos: `)));
                //console.log(perfumesVendidos_Juana[x] + " " + perfumes[x].nombrePerfume);
            }
        } else {
            for(let x=0; x<perfumes.length; x++){
                perfumesVendidos_Pedro.push(parseInt(prompt(`Ingrese la cantidad de ${perfumes[x].nombrePerfume} vendidos: `)));
                //console.log(perfumesVendidos_Pedro[x] + " " + perfumes[x].nombrePerfume);
            }
        }
    }


function totalVentas(flagImprimir, nombreVendedor, perfumesVendidos){
    total = 0;
    if (flagImprimir){
        console.log(`Datos de venta de ${nombreVendedor}:`);
    }
    for(let i=0; i<perfumesVendidos.length; i++){
        if (flagImprimir){
            console.log(perfumesVendidos[i] + " " + perfumes[i].nombrePerfume);
        }
        let ventas = perfumesVendidos[i] * perfumes[i].precioPerfume;
        total += ventas;
    }
    if(flagImprimir){
        console.log("TOTAL DE VENTAS: " + total);
    }
    return total;
}

function vendedorMes(totalVentas1, totalVentas2){
    if (totalVentas1 === totalVentas2){
        console.log("Los dos son empleados del mes");
    } else if (totalVentas1 < totalVentas2){
        console.log("Pedro es el empleado del mes");
    } else {
        console.log("Juana es el empleado del mes");
    }
}

let btnJuana = document.getElementById("btn-juana");
btnJuana.addEventListener("click",function(){
    console.clear();
    totalVentas(true, vendedores[0], perfumesVendidos_Juana);
}
);

let btnPedro = document.getElementById("btn-pedro");
btnPedro.addEventListener("click",function(){
    console.clear();
    totalVentas(true, vendedores[1], perfumesVendidos_Pedro);
}
);

let btnEmpleado = document.getElementById("btn-empleado");
btnEmpleado.addEventListener("click",function(){
    console.clear();
    let totalJuana = totalVentas(false, vendedores[0], perfumesVendidos_Juana);
    let totalPedro = totalVentas(false, vendedores[1], perfumesVendidos_Pedro);
    vendedorMes(totalJuana, totalPedro);
}
);