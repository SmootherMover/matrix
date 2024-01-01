function dot_product(){
    document.getElementById("main-content").innerHTML = ` <div id="matrix-1">
    <div style="position: relative;">
    <div id="left-bracket"></div>
    <div id="left-top-bracket"></div>
    <div id="left-bottom-bracket"></div>
    <table id="matrix-1-grid">
        <tbody>
          <tr>
            <td><input type="number" class="matrix-1" name="cell_1_1_1" value=""></td>
          
            <!-- Add more cells as needed -->
          </tr>
          <tr>
            <td><input type="number" class="matrix-1" name="cell_1_2_1"  value=""></td>
           
            <!-- Add more cells as needed -->
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
    </table>
  <div id="row-buttons">
    <button class="matrix-buttons" onclick="deleteRow(1); deleteColumn(2)">-</button>
    <button class="matrix-buttons" onclick="addRow(1); addColumn(2)">+</button>
  </div>
    <div id="right-bracket"></div>
    <div id="right-top-bracket"></div>
    <div id="right-bottom-bracket"></div>
    </div>
  </div>
  
  <div id="operator-symbol">&#x2022;</div>
  
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
          <!-- Add more rows as needed -->
        </tbody>
    </table>
      <div id="column-buttons">
      <button class="matrix-buttons" onclick="deleteRow(1); deleteColumn(2)">-</button>
      <button class="matrix-buttons" onclick="addRow(1); addColumn(2)">+</button>
    </div>
    <div id="right-bracket"></div>
    <div id="right-top-bracket"></div>
    <div id="right-bottom-bracket"></div>
    </div>
  </div>
  
  <button id="equal" onclick="vertical_loop(); check(); dotproduct()">=</button> 
  
  
  <p id="dot-product-answer">?</p>
  
  </div>
  `;
  
  
  };

function dotproduct(){
  let sum = 0;
  if(proceed){
    for (let i = 0; i < matrix_1.length; i++) {
      sum += matrix_1[i] * matrix_2[i];
    }
    document.getElementById("dot-product-answer").innerHTML = sum;
      
  };
}
