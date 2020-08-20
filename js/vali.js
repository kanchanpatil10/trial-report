const form = document.querySelector('.form');
const table = document.querySelector("table");


function myFunction() {
	

  if(parseInt(form.outOf.value)>=parseInt(form.marks.value)){
  	
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  
  cell1.innerHTML = `${form.subject.value}`;
  cell2.innerHTML = `${form.marks.value}`;
  cell3.innerHTML = `${form.outOf.value}`;  
  
  }

//     var tableArr = [];
//     for ( var i = 1; i < table.rows.length; i++ ) {
//     tableArr.push({
//         subject: table.rows[i].cells[0].innerHTML,
//         marks: table.rows[i].cells[1].innerHTML,
//         outOf: table.rows[i].cells[2].innerHTML,
        
//     });
// }

// console.log([tableArr[0].subject]);

}

function de(){
    table.deleteRow(-1);
}


localStorage.setItem("name",form.name.value);
localStorage.setItem("rollno",form.rollNo.value);

