let nombrePlanetas = Array('Mercurio','Venus','Tierra','Marte','Jupiter','Saturno','Urano','Neptuno')
let distancia = [57,108,149,227,778,1434,2871,'67'] // Neptuno 4495
const tamanio = [2439,6051,6371,3389,69911,58232,25362,24662]

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamanio)

nombrePlanetas.forEach((value,index,array) => {
    console.log('Planeta', index, value)
});

nombrePlanetas.map((planetas,index)=>{
    return(
        console.log(`El planeta ${planetas} tiene tamaño de: ${tamanio[index]} km`)
    )
})

// fun map()

let resultadoMap = nombrePlanetas.map((planetas,index)=>{
    return(`El planeta ${planetas} tiene tamaño de: ${tamanio[index]} km`)
})
console.log(resultadoMap) //  ['El planeta Mercurio tiene tamaño de: 2439 km', 'El planeta Venus tiene tamaño de: 6051 km', 'El planeta Tierra tiene tamaño de: 6371 km', 'El planeta Marte tiene tamaño de: 3389 km', 'El planeta Jupiter tiene tamaño de: 69911 km', 'El planeta Saturno tiene tamaño de: 58232 km', 'El planeta Urano tiene tamaño de: 25362 km', 'El planeta Neptuno tiene tamaño de: 24662 km']

/*
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

