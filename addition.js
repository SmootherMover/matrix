function addition() {
  document.getElementById("main-content").innerHTML = ` <div id="matrix-1">
    <div style="position: relative;">
    <div id="left-bracket"></div>
    <div id="left-top-bracket"></div>
    <div id="left-bottom-bracket"></div>
    <table id="matrix-1-grid">
        <tbody>
          <tr>
            <td><input type="number" class="matrix-1" name="cell_1_1_1" value=""></td>
            <td><input type="number" class="matrix-1" name="cell_1_1_2"  value=""></td>
            
            <!-- Add more cells as needed -->
          </tr>
          <tr>
            <td><input type="number" class="matrix-1" name="cell_1_2_1"  value=""></td>
            <td><input type="number" class="matrix-1" name="cell_1_2_2" value=""></td>
            <!-- Add more cells as needed -->
          </tr>
          <!-- Add more rows as needed -->
        </tbody> 
    </table>
    <div id="column-buttons">
    <button class="matrix-buttons" onclick="deleteColumn(1); deleteColumn(2); deleteColumn(3)">-</button>
    <button class="matrix-buttons" onclick="addColumn(1); addColumn(2); addColumn(3)">+</button>
  </div>
  <div id="row-buttons">
    <button class="matrix-buttons" onclick="deleteRow(1); deleteRow(2); deleteRow(3)">-</button>
    <button class="matrix-buttons" onclick="addRow(1); addRow(2); addRow(3)">+</button>
  </div>
    <div id="right-bracket"></div>
    <div id="right-top-bracket"></div>
    <div id="right-bottom-bracket"></div>
    </div>
  </div>
  
  <div id="operator-symbol">+</div>
  
  <div id="matrix-2">
    <div style="position: relative;">
    <div id="left-bracket"></div>
    <div id="left-top-bracket"></div>
    <div id="left-bottom-bracket"></div>
    <table id="matrix-2-grid">
        <tbody>
          <tr>
            <td><input type="number" class="matrix-2" name="cell_2_1_1" value=""></td>
            <td><input type="number" class="matrix-2" name="cell_2_1_2" value=""></td>
            
            <!-- Add more cells as needed -->
          </tr>
          <tr>
            <td><input type="number" class="matrix-2" name="cell_2_2_1" value=""></td>
            <td><input type="number" class="matrix-2" name="cell_2_2_2" value=""></td>
            <!-- Add more cells as needed -->
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
    </table>
      <div id="column-buttons">
      <button class="matrix-buttons" onclick="deleteColumn(1); deleteColumn(2); deleteColumn(3)">-</button>
      <button class="matrix-buttons" onclick="addColumn(1); addColumn(2); addColumn(3)">+</button>
    </div>
    <div id="row-buttons">
      <button class="matrix-buttons" onclick="deleteRow(1); deleteRow(2); deleteRow(3)">-</button>
      <button class="matrix-buttons" onclick="addRow(1); addRow(2); addRow(3)">+</button>
    </div>
    <div id="right-bracket"></div>
    <div id="right-top-bracket"></div>
    <div id="right-bottom-bracket"></div>
    </div>
  </div>
  
  <button id="equal" onclick="check(); add()"> =</button> 
  
  <div id="matrix-3">
  <div style="position: relative;">
  <div id="left-bracket"></div>
  <div id="left-top-bracket"></div>
  <div id="left-bottom-bracket"></div>
  <table id="matrix-3-grid">
      <tbody>
        <tr>
          <td><input type="number" class="matrix-3" value=""></td>
          <td><input type="number" class="matrix-3" value=""></td>
          
          <!-- Add more cells as needed -->
        </tr>
        <tr>
          <td><input type="number" class="matrix-3" value=""></td>
          <td><input type="number" class="matrix-3" value=""></td>
          <!-- Add more cells as needed -->
        </tr>
        <!-- Add more rows as needed -->
      </tbody>
  </table>
  <div id="right-bracket"></div>
  <div id="right-top-bracket"></div>
  <div id="right-bottom-bracket"></div>
  </div>
  </div>
  `;
}

function add() {
  console.log(proceed);
  if (proceed) {
    for (let i = 0; i < matrix_1.length; i++) {
      document.getElementsByClassName("matrix-3")[i].value =
        matrix_1[i] + matrix_2[i];
    }
  }
}
