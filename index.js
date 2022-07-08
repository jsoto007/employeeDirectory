const employeesInfo = document.createElement('ul');
document.getElementById("p-01").appendChild(employeesInfo);
const employeeDisplayInfo = document.getElementById('employee-information');
const form = document.querySelector('#new-employee-form').addEventListener("submit", handlesForm)


function renderBtn(employee) {
    const newBtn = document.createElement("button");
    newBtn.className = "info-btn";
    newBtn.innerText = `${employee.name}`

    newBtn.addEventListener('click', () => displayData(employee))
    newBtn.addEventListener('mouseover', () => {
        console.log(newBtn)
    })
    employeesInfo.appendChild(newBtn);
    document.querySelector('#new-employee-form').reset()

}

function displayData(employee) {
    const li = document.createElement('li')
    li.className = "displayed-data"
    li.innerText = `NAME: ${employee.name} TITLE: ${employee.title} SHIFT: ${employee.shift}`
    employeeDisplayInfo.appendChild(li);
    li.addEventListener('click', event => removeDisplayedInfo(event))
}

function handlesForm(e) {
    e.preventDefault()
    let employeeObj = {
        name: e.target.name.value,
        title: e.target.title.value,
        shift: e.target.shift.value,
        schedule: e.target.schedule.value
    }
    renderBtn(employeeObj)
    addsNewEmployee(employeeObj)
}

function removeDisplayedInfo(event) {
    event.target.remove()
}

function displayMouseOver() {

}



fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(employeeData => employeeData.forEach(employee => renderBtn(employee)))

function addsNewEmployee(employeeObj) {
    fetch('http://localhost:3000/employees', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(employeeObj)

        })
        .then(response => response.json())
        .then(employee => console.log(employee))
}