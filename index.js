const employeesInfo = document.createElement('ul');
document.getElementById("p-01").appendChild(employeesInfo)

fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(employeeData => employeeData.forEach(employee => renderBtn(employee)))


function renderBtn(employee) {
    const newBtn = document.createElement("button");
    newBtn.className = "infoBtn";
    newBtn.innerText = `${employee.name}`

    newBtn.addEventListener('click', () => console.log("This works"))

    employeesInfo.appendChild(newBtn);

}