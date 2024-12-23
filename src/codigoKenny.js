

/*const array = ["Manolo", "Ramon", "Kenny", "Yoli", "Yoli"]
array[array.length] = "Yoli"

const resultado = array.map(y => y === "Yoli" ? "Milo" : y);

console.log(resultado);


console.log("")



let numero = Math.random()*100

let redondeo = Math.round(numero)

console.log(redondeo)

console.log("")

let array1 = ["Manolo", "Ramon", "Juan"]

if(array1.length>1){

console.log(" ")

}


console.log("")


let edadChico = 22;

if (edadChico = 22) {
    console.log("Eres el mejor");
} else if (edadChico >= 18 && edadChico <= 60) {
    console.log("Puedes entrar");
} else {
    console.log("No puedes entrar");
}


let estiloDeMusica = "Hard Rock";

switch(estiloDeMusica) {


    case 'Punk':

        console.log("Te recomiendo los Ramones")

        break;

    case 'Hard Rock':

        console.log("Te recomiendo los Guns")

        break;

    case 'Reggeton':

        console.log("Te recomiendo Nicky Jan")

        break;

}*/


/*let coches = 5;

let personas = 6;


if(coches>personas){
    console.log("Hay mas coches que persona uoo uoo")
}else{
    coches ++;
    console.log("No tienes coche... lo siento")
}*/


/*let dato = "5"


let persona = espania => espania + 12

let resultado = persona(parseInt(dato))


console.log("Cuantas personas hay en España", resultado)



let double = 10


let fun = kenny => kenny * 2


console.log(fun(5))


let filtradoPares = fil => fil
.filter(num => num % 2 === 0)
.find(num => num === 2)
*/


/*let filtrPares = fil => {
    const encontrado = fil.filter(num => num % 2 === 0).find(num => num === 2);
    return encontrado ? encontrado * 20 : null;
};

console.log(filtrPares([1, 2, 3, 4, 5, 6])); 



let sumarDecena = numero => numero + 12

console.log(sumarDecena(10))



function mostrar(){

    document.getElementById("Selector").innerHTML=  Date()
}


let texto = "Kenny"

let resultado = texto.slice(2,4) 

console.log(resultado)*/



/*let numero = Math.random() * 100;

let redondeo = Math.round(numero);

console.log(redondeo)

let edad = 28
let nacionalidad = "Argentino"
let tienePasaporte = true

// if anidado si la primera condición no se cumple ya no se evaluan las demas 

if (edad >= 18) {
    console.log("Tienes edad para viajar")
    if (nacionalidad == "Argentino") {
        console.log("la nacionalidad es correcta")
    } else {
        console.log("No tienes la nacionalidad")
    }
} else {
    console.log("No tienes la edad")
}


// if separados se evaluan de forma individual cada condicion

if (edad >= 18) {
    console.log("Tienes edad para viajar")
} else { console.log("No tienes la edad") }

if (nacionalidad == "Español") {
    console.log("la nacionalidad es correcta")
} else { console.log("No tienes la nacionalidad") }
    

// if con else if va evaluando a ver que condicion se cumple y la muesta si no se cumple ninguna se imprime el else

if (edad >= 18) {
    console.log("Tienes edad para viajar")
}
else if (nacionalidad == "Español") {
    console.log("la nacionalidad es correcta")
} else { console.log("No tienes la nacionalidad") }*/



/*let numeros = [1, 2, 3, 4, 5, 6, 7, 8,]


numeros.forEach(numero => {
    console.log(numero)
})



let edad = 0;

while(edad < 18){
    console.log(`Tienes ${edad} años y aún eres un niño`);
    edad++;
}

console.log(`Tienes ${edad} años y ya eres mayor de edad`);



let edad1 = 0;

do {
    {
        console.log(`Tienes ${edad1} años y aún eres un niño`); edad1++;
    }

} while (edad1 < 18)

console.log(`Tienes ${edad1} años y ya eres mayor de edad`);*/


let promesa = new Promise((response, reject) => {
    //let resp = "Esta es la respuesta del servicio"
    //setTimeout() es para que la ejecución tarde mas tiempo
    let resp = {
        response: 200,
        description: "Esto es importante"
    }
    response(resp)
    reject('Falló')
})

promesa.then(res => {
    console.log(res.description)
}).catch(error => {
    console.error(error)
})






