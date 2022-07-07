const employeesInfo = document.createElement('ul');
document.getElementById("p-01").appendChild(employeesInfo);
const employeeDisplayInfo = document.getElementById('employee-information');

fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(employeeData => employeeData.forEach(employee => renderBtn(employee)))


function renderBtn(employee) {
    const newBtn = document.createElement("button");
    newBtn.className = "info-btn";
    newBtn.innerText = `${employee.name}`

    newBtn.addEventListener('click', () => displayData(employee), {
        once: true
    })

    employeesInfo.appendChild(newBtn);

}

function displayData(employee) {
    const li = document.createElement('li')
    li.className = "displayed-info"
    li.innerText = `NAME: ${employee.name} TITLE: ${employee.title} SHIFT: ${employee.shift}`
    employeeDisplayInfo.appendChild(li);

}