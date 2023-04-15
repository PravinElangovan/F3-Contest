var button = document.getElementById('btn');
var employeeDetails = [];
var ol = document.getElementById('employeeList');
var errorMessage = document.getElementById('error');
var employeeCount = document.getElementById('employeeCount')

button.addEventListener('click', (event) => {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var profession = document.getElementById('prof').value;
  var age = document.getElementById('age').value;

  var employee = {
    employeeName: name,
    employeeProfession: profession,
    employeeAge: age
  };
  if(employee.employeeName.trim() == "" || employee.employeeProfession.trim() == "" || employee.employeeAge.trim() == ""){
    //throw the error
    errorMessage.innerText = 'Error : Please make sure all the fields are filled before adding into the employee'
  }
  else{
    employeeCount.style.display = 'none'
    errorMessage.innerText ='User Added Successfully'
    errorMessage.style.color = 'green'
    employeeDetails.push(employee);
    console.log(employeeDetails);

    var li=document.createElement('li');
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style.backgroundColor='white'
    deleteButton.style.color='black'
    deleteButton.style.borderRadius='10px'
    deleteButton.style.padding='5px'

    li.textContent = `Name : ${employee.employeeName} Profession : ${employee.employeeProfession} Age : ${employee.employeeAge}`
    

    deleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    var index = employeeDetails.indexOf(employee);
    if (index !== -1) {
      employeeDetails.splice(index, 1);
      li.remove();
    }
  });

  // Append the delete button to the list item
  li.appendChild(deleteButton);
  ol.appendChild(li);
  }
  
  
});
