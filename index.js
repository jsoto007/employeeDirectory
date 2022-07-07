fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(employeeData => employeeData.forEach(employee => renderData(employee)))

function renderData(employees) {
    let employeeInfo = document.createElement('li');
    employeeInfo.className = 'infoBox'
    employeeInfo.innerHTML = `
    <button class="infoBtn">${employees.name}</button><br>
    <p>${employees.title}</p>
    <p>${employees.schedule}</p>
`
    console.log(employeeInfo)
}