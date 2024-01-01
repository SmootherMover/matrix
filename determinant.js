function determinant(){
    document.getElementById("main-content").innerHTML = 
    ` <div id="matrix-1">
    <div style="position: relative;">
    <div id="left-bracket"></div>
 
    <table id="matrix-1-grid">
        <tbody>
          <tr>
            <td><input type="number" class="matrix-1" name="cell_1_1_1" value=""></td>
            <td><input type="number" class="matrix-1" name="cell_1_1_2" value=""></td>
            
            <!-- Add more cells as needed -->
          </tr>
          <tr>
            <td><input type="number" class="matrix-1" name="cell_1_2_1" value=""></td>
            <td><input type="number" class="matrix-1" name="cell_1_2_2" value=""></td>
            <!-- Add more cells as needed -->
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
    </table>
    <div id="column-buttons">
    <button class="matrix-buttons" onclick="deleteColumn(1); deleteRow(1)">-</button>
    <button class="matrix-buttons" onclick="addColumn(1); addRow(1)">+</button>
  </div>
  <div id="row-buttons">
    <button class="matrix-buttons" onclick="deleteRow(1); deleteColumn(1)">-</button>
    <button class="matrix-buttons" onclick="addRow(1); addColumn(1)">+</button>
  </div>
    <div id="right-bracket"></div>
    </div>
  </div>
   
  <button id="equal" onclick="check(); determinant_operation()"> =</button> 
  
  <p id="dot-product-answer">?</p>
  
  </div>
  `;
};

function arrayToSquareMatrix(arr, size) {
    const matrix = [];
    let index = 0;
  
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(arr[index] || 0);
        index++;
      }
      matrix.push(row);
    }
  
    return matrix;
  }
  

function getDeterminant(matrix) {
  
    // Base case: matrix of size 1x1
    if (matrix.length === 1) {
      return matrix[0][0];
    }
  
    // Base case: matrix of size 2x2
    if (matrix.length === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
  
    let det = 0;
  
    // Use Laplace expansion to compute the determinant
    for (let j = 0; j < matrix.length; j++) {
      det += matrix[0][j] * cofactor(matrix, 0, j);
    }
  
    return det;
  }
  
  // Function to calculate the cofactor of a matrix element
  function cofactor(matrix, row, col) {
    // Get the submatrix by removing the current row and column
    const submatrix = matrix.filter((_, i) => i !== row).map(row => row.filter((_, j) => j !== col));
  
    // Calculate the determinant of the submatrix
    const submatrixDet = getDeterminant(submatrix);
  
    // Apply the sign based on the position of the element
    return (row + col) % 2 === 0 ? submatrixDet : -submatrixDet;
  }

function determinant_operation(){
    let squareMatrix = arrayToSquareMatrix(matrix_1, document.getElementById("matrix-1-grid").rows.length )
    document.getElementById("dot-product-answer").innerHTML = getDeterminant(squareMatrix);

}