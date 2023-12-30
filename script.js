let matrix_1 = [];
let matrix_2 = [];
let proceed = true;

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        buttons.forEach(btn => {
          if (btn !== button) {
            btn.classList.remove('selected');
          }
        });

        button.classList.toggle('selected');
      });
    });
  });

  function addColumn(gridnumber) {
    let table = document.getElementById('matrix-' + gridnumber + '-grid');

    // Add cells to each existing row
    for (let i = 0; i < table.rows.length; i++) {
      let cell = table.rows[i].insertCell(-1);
      let input = document.createElement('input');
      input.setAttribute("class", 'matrix-' + gridnumber);
      input.type = 'number';
      input.name = 'cell_' + gridnumber + '_' + i + '_' + table.rows[i].cells.length;
      cell.appendChild(input);
    }
  }

  function addRow(gridnumber) {
    let table = document.getElementById('matrix-' + gridnumber + '-grid');
    let rowIndex = table.rows.length;
    
    // Add a new row
    let row = table.insertRow(-1);

    // Add cells to the new row
    for (let i = 0; i < table.rows[0].cells.length; i++) {
      let cell = row.insertCell(-1);
      let input = document.createElement('input');
      input.setAttribute("class", 'matrix-' + gridnumber);
      input.type = 'number';
      input.name = 'cell_' + gridnumber + '_'  + rowIndex + '_' + i;
      cell.appendChild(input);
    }
  }

  function deleteColumn(gridnumber) {
    let table = document.getElementById('matrix-' + gridnumber + '-grid');

    // Don't delete if there's only one column
    if (table.rows[0].cells.length > 1) {
      // Remove cells from each existing row
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }
    }
  }

  function deleteRow(gridnumber) {
    let table = document.getElementById('matrix-' + gridnumber + '-grid');

    // Don't delete if there's only one row
    if (table.rows.length > 1) {
      // Remove the last row
      table.deleteRow(-1);
    }
  }

function check(){ 
  matrix_1 = [];
  matrix_2 = [];
  for (let i = 0; i < document.getElementsByClassName("matrix-1").length; i++) { 
    if(document.getElementsByClassName("matrix-2")[i].value == ""){
      error();
      return proceed = false;
    }
    matrix_1.push(parseInt(document.getElementsByClassName("matrix-1")[i].value));
  }  
  for (let i = 0; i < document.getElementsByClassName("matrix-2").length; i++) {
    if(document.getElementsByClassName("matrix-2")[i].value == ""){
      error();
      return proceed = false;
    }
    matrix_2.push(parseInt(document.getElementsByClassName("matrix-2")[i].value));

  }

 
}; 







