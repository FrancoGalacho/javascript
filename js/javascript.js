let usuario = 2234
let argentinaDolar= 168
let chileDolar= 883
let brasilDolar= 5



function login () {
    let ingreso = false;

    for (let i = 2; i >= 0; i--) {
        let userPin = prompt ("ingresa tu PIN de ingreso. Tenes" + " " + (i+1) + " "  + "oportunidades");

        if (userPin == usuario) {
            alert("El ingreso fue Exitoso");
            ingreso=true;
            break;
        } else {
            alert( "Error, le quedan" + i + "intentos para ingresar");
        }
        
    }
    return ingreso;
}

let exito = login() ;

if (exito) {

    let opcion = prompt(
        "Elija el pais que desee hacer la conversion: \n1- Argentina. \n2- Chile. \n3- Brasil. \nPresiona X para finalizar."
    );
    
 while (opcion != "X" && opcion != "x") {
    switch (opcion) {
        case "1":
                let conversion = parseInt(prompt ("ingresa cantidad de dolares a convertir"))
                if (conversion = argentinaDolar) {
                    conversion = conversion * argentinaDolar 
                    alert("son $"+ conversion + "pesos Argentinos")
                }
            
            break;
        case "2":
            let conversion2 = parseInt(prompt ("ingresa cantidad de dolares a convertir"))
                if (conversion2 = chileDolar) {
                    conversion2 = conversion2 * chileDolar 
                    alert("son $"+ conversion2 + "pesos Chilenos")
                }
            break;
        case "3":
            let conversion3 = parseInt(prompt ("ingresa cantidad de dolares a convertir"))
                if (conversion3 = brasilDolar) {
                    conversion3 = conversion3 * brasilDolar 
                    alert("son $"+ conversion3 + "Reales Brasileños")
                }
            break;
        
        default: 
            alert("Opcion no valida");
            break;
            
    }
    opcion = prompt(
        "Elija el pais que desee hacer la conversion: \n1- Argentina. \n2- Chile. \n3- Brasil. \nPresiona X para finalizar."
    );
 }
} 


