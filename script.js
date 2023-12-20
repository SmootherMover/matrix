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

  function addColumn() {
    var table = document.getElementById('editableGrid');

    // Add cells to each existing row
    for (var i = 0; i < table.rows.length; i++) {
      var cell = table.rows[i].insertCell(-1);
      var input = document.createElement('input');
      input.type = 'text';
      input.name = 'cell_' + i + '_' + table.rows[i].cells.length;
      cell.appendChild(input);
    }
  }

  function addRow() {
    var table = document.getElementById('editableGrid');
    var rowIndex = table.rows.length;

    // Add a new row
    var row = table.insertRow(-1);

    // Add cells to the new row
    for (var i = 0; i < table.rows[0].cells.length; i++) {
      var cell = row.insertCell(-1);
      var input = document.createElement('input');
      input.type = 'text';
      input.name = 'cell_' + rowIndex + '_' + i;
      cell.appendChild(input);
    }
  }

  function deleteColumn() {
    var table = document.getElementById('editableGrid');

    // Don't delete if there's only one column
    if (table.rows[0].cells.length > 1) {
      // Remove cells from each existing row
      for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }
    }
  }

  function deleteRow() {
    var table = document.getElementById('editableGrid');

    // Don't delete if there's only one row
    if (table.rows.length > 1) {
      // Remove the last row
      table.deleteRow(-1);
    }
  }