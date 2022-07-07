fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(employeeData => employeeData.forEach(employee => renderBtn(employee)))

function renderBtn(employees) {
    let employeeInfo = document.createElement('ul');
    employeeInfo.className = 'infoBox'
    employeeInfo.innerHTML = `
    <button class="infoBtn">${employees.name}</button><br>
   
`
    console.log(employeeInfo)
    document.getElementById("p-01").appendChild(employeeInfo)

}

function addEventListeners() {

    const btns = document.querySelectorAll(".infoBtn");
    btns.forEach(btn => btn.addEventListener('click', function () {
        alert('does this work')
    }))
    console.log(btns)
}
addEventListeners()

{
    /* <p>${employees.title}</p>
    <p>${employees.schedule}</p> */
}