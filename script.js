let headerCell = 3;
//This global variable is used when adding new rows to the table
//It starts at three since the sample table starts with 3 rows of non header cells

//An arrow function can also be used but I chose to make a regular function
//Because it's easier for me to keep track of and read
function addRow() {
  var table = document.getElementById("table");
  //First select the table element and assign a variable to it's reference
  let newRow = table.insertRow(-1);
  //Negative 1 is specified so that new rows are appended to the bottom of the table
  let newHeaderCell = newRow.insertCell(0);
  let newCell1 = newRow.insertCell(1);
  let newCell2 = newRow.insertCell(2);
  let newCell3 = newRow.insertCell(3);
  document.querySelectorAll;
  headerCell++;
  //First the header count is incremented by 1 for the new row of cells

  newHeaderCell.innerHTML = headerCell;
  //Next the newly created header cell for the new row is set to the value
  //of the incremented variable.
  //This makes sure each row has an accurate and updated row number

  let newText1 = document.getElementById("cell1").value;
  newCell1.innerHTML = newText1;
  // newCell.appendChild(newText1);
  console.log(newText1);

  let newText2 = document.getElementById("cell2").value;
  newCell2.innerHTML = newText2;

  let newText3 = document.getElementById("cell3").value;
  newCell3.innerHTML = newText3;

  //Rather than write out each individual getElement for the text fields
  //We can use getElementsByClass and then iterate through the returned collection
  //This is really convienent because Bootstrap already requires classes for field controls
  let myInputFields = document.getElementsByClassName("form-control");
  for (let i = 0; i < myInputFields.length; i++) {
    myInputFields[i].value = "";
    //All this does is set the input fields to empty after the new row is added to the table
  }
}

let submitButton = document.getElementById("submit");
console.log(submitButton);
submitButton.addEventListener("click", addRow);

/* This is debug code used to test how adding event listeners works
function myFunction(){
    alert("Hello World");
}

submitButton.addEventListener("click", myFunction);
 */
