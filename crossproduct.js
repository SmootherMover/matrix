function cross_product(){
    document.getElementById("main-content").innerHTML = 
    ` <div id="matrix-1">
    <div style="position: relative;">
    <div id="left-bracket"></div>
    <div id="left-top-bracket"></div>
    <div id="left-bottom-bracket"></div>
    <table id="matrix-1-grid">
        <tbody>
          <tr>
            <td><input type="number" class="matrix-1" name="cell_1_1_1" value="1"></td>
            <td><input type="number" class="matrix-1" name="cell_1_1_2"  value="2"></td>
            
            <!-- Add more cells as needed -->
          </tr>
          <tr>
            <td><input type="number" class="matrix-1" name="cell_1_2_1"  value="3"></td>
            <td><input type="number" class="matrix-1" name="cell_1_2_2" value="4"></td>
            <!-- Add more cells as needed -->
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
    </table>
    <div id="column-buttons">
    <button class="matrix-buttons" onclick="deleteColumn(1); deleteRow(2)">-</button>
    <button class="matrix-buttons" onclick="addColumn(1); addRow(2)">+</button>
  </div>
  <div id="row-buttons">
    <button class="matrix-buttons" onclick="deleteRow(1); deleteRow(3)">-</button>
    <button class="matrix-buttons" onclick="addRow(1); addRow(3)">+</button>
  </div>
    <div id="right-bracket"></div>
    <div id="right-top-bracket"></div>
    <div id="right-bottom-bracket"></div>
    </div>
  </div>
  
  <div id="operator-symbol">⨯</div>
  
  <div id="matrix-2">
    <div style="position: relative;">
    <div id="left-bracket"></div>
    <div id="left-top-bracket"></div>
    <div id="left-bottom-bracket"></div>
    <table id="matrix-2-grid">
        <tbody>
          <tr>
            <td><input type="number" class="matrix-2" name="cell_2_1_1" value="1"></td>
            <td><input type="number" class="matrix-2" name="cell_2_1_2" value="2"></td>
            <!-- Add more cells as needed -->
          </tr>
          <tr>
            <td><input type="number" class="matrix-2" name="cell_2_2_1" value="3"></td>
            <td><input type="number" class="matrix-2" name="cell_2_2_2" value="4"></td>
            <!-- Add more cells as needed -->
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
    </table>
      <div id="column-buttons">
      <button class="matrix-buttons" onclick="deleteColumn(2); deleteColumn(3)">-</button>
      <button class="matrix-buttons" onclick="addColumn(2); addColumn(3)">+</button>
    </div>
    <div id="row-buttons">
      <button class="matrix-buttons" onclick="deleteRow(2); deleteColumn(1)">-</button>
      <button class="matrix-buttons" onclick="addRow(2); addColumn(1)">+</button>
    </div>
    <div id="right-bracket"></div>
    <div id="right-top-bracket"></div>
    <div id="right-bottom-bracket"></div>
    </div>
  </div>
  
  <button id="equal" onclick="vertical_loop(); check(); crossproduct()"> =</button> 
  
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
};

function crossproduct(){
    let rows1 = document.getElementById("matrix-1-grid").rows.length;
    let cols1 = document.getElementById("matrix-1-grid").rows[0].cells.length
    let cols2 = document.getElementById("matrix-2-grid").rows[0].cells.length;
    let resultant = [];
    for (let i = 0; i < rows1; i++) {
      resultant[i] = [];
      for (let j = 0; j < cols2; j++) {
          resultant[i][j] = 0;
        for (let k = 0; k < cols1; k++) {
          resultant[i][j] += matrix_1[i * cols1 + k] * matrix_2[k * cols2 + j];
        }
      }
    }   

    console.log(resultant);
//   resultant.push(matrix_1[i] * matrix_columns[i]);
// console.log(document.getElementById("matrix-2-grid").rows[i].cells.length);
      
  };

