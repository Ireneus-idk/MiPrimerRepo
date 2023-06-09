var data = [];

function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var salary = parseInt(document.getElementById('salary').value);
 
  // Validar los datos del formulario
  if (name === '' || email === '' || message==='' || salary < 10000) {
    alert('Por favor, complete todos los campos correctamente.');
    return;
  }

  var formData = {
    name: name,
    email: email,
    salary: salary,
    message: message
  };

  data.push(formData);
  updateTable();

  // Limpio el formulario después de enviar
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('salary').value = '';
  document.getElementById('message').value = '';
  alert('¡El formulario ha sido enviado correctamente!');
}

function updateTable() {
  var tableBody = document.getElementById('dataBody');
  tableBody.innerHTML = '';

  for (var i = 0; i < data.length; i++) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var emailCell = document.createElement('td');
    var messageCell = document.createElement('td');
    var salaryCell = document.createElement('td');

    nameCell.textContent = data[i].name;
    emailCell.textContent = data[i].email;
    messageCell.textContent = data[i].message;
    salaryCell.textContent = data[i].salary;

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(messageCell);
    row.appendChild(salaryCell);
    tableBody.appendChild(row);
  }
}

function sortSalary() {
  data.sort(function(a, b) {
    return b.salary - a.salary;
  });
  
  updateTable();
}
