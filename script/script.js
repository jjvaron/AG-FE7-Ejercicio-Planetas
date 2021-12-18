let nombrePlanetas = Array('Mercurio','Venus','Tierra','Marte','Jupiter','Saturno','Urano','Neptuno')
let distancia = [57,108,149,227,778,1434,2871,4495] // Neptuno 4495
const tamanio = [2439,6051,6371,3389,69911,58232,25362,24662]

 function buildTable(col1,col2,col3){
    var table = document.getElementById('tabla1')
    //table.innerHTML = '' //si se agrega esto, en el html no se muestra la primera fila
    for(let i = 0 ; i < col1.length; i++){
        var row = `
                <tr>
                    <td style="color:white;">${i}</td> 
                    <td style="color:white;">${col1[i]}</td>
                    <td style="color:white;">${col2[i]}</td>
                    <td style="color:white;">${col3[i]}</td>
                </tr>  
        `
        table.innerHTML += row;
    };
}

buildTable(nombrePlanetas,distancia,tamanio)
/* https://stackoverflow.com/questions/51187477/how-to-filter-a-html-table-using-simple-javascript */

function filtrarTabla() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("entrada_filtrar");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabla1");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  // primera versión filtrado de tabla
/* const entradaFiltrar = document.getElementById("entrada_filtrar");
const rows = document.querySelectorAll("tbody tr");
//sconsole.log(rows);
entradaFiltrar.addEventListener("keyup",function(event){
    // console.log('Entrada de texto filtrar', event) // verificar que se recibe la entrada de teclado
    const q = event.target.value.toLocaleLowerCase();
    rows.forEach((row) => {
        //console.log(row)
        row.querySelector("td").textContent.toLocaleLowerCase().startsWith(q)
        ? (row.style.display = "table-row")
        : (row.style.display = "none");
    })
})  */
// https://www.w3schools.com/howto/howto_js_sort_table.asp
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tabla1");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) { 
            //(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) SORT LETRAS
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }


/*
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

