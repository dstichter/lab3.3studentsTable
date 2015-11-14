var create = document.getElementById("add");
var table = document.getElementById("studentsTable");
var numRows;

for(i = 0;i < document.getElementsByClassName("remove").length; i++){
  document.getElementsByClassName("remove")[i].addEventListener("click", removeRow);

}
create.addEventListener("click", createRow);

setInterval(randomDelete, 10000);



function removeRow(){
  table.deleteRow(this);
}

function createRow(){
numRows = table.rows.length;

newRow = table.insertRow(numRows - 1);
newRow.insertCell(0).innerHTML = "New";
newRow.insertCell(1).innerHTML = "New";
newRow.insertCell(2).innerHTML = "New";
newRow.insertCell(3).innerHTML = "New";
}
function randomDelete(){
  if(table.rows.length > 2){
    table.deleteRow(1);
  }
}