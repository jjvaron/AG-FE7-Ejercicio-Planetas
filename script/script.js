let nombrePlanetas = Array('Mercurio','Venus','Tierra','Marte','Jupiter','Saturno','Urano','Neptuno')
let distancia = [57,108,149,227,778,1434,2871,'67'] // Neptuno 4495
const tamanio = []

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamanio)

// operador de igualdad ==
for(const key in distancia){
    if(distancia[key] == '57'){
        console.log('Se encontró la distancia')
    }
    else{
        console.log('No se encontró la distancia')
    }
}

// operador de igualdad estricta ===
for(const key in distancia){
    if(distancia[key] === '57'){
        console.log('Se encontró la distancia')
    }
    else{
        console.log('No se encontró la distancia')
    }
}

/*
// tipos de ciclos 
let i=0;
while(i <= nombrePlanetas.length -1){
    console.log(i)
    console.log(nombrePlanetas[i]);
    i = i+1
}

for(let index = 0; index < nombrePlanetas.length; index++){
    console.log(nombrePlanetas[index]);
} 

//ciclo for in
for(const key in object){
    if(Object.hasOwnProperty.call(object, key)){
        const element = object[key];
    }
}

// ciclo for of
for(const key in nombrePlanetas){
    console.log(nombrePlanetas[key])
}

for(const iterator of object){

}

for(const planeta of nombrePlanetas){
    console.log(planeta)
}
*/

