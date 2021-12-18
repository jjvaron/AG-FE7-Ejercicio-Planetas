let nombrePlanetas = Array('Mercurio','Venus','Tierra','Marte','Jupiter','Saturno','Urano','Neptuno')
let distancia = [57,108,149,227,778,1434,2871,4495]
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

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tabla1");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) { 
            //(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) SORT LETRAS
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
