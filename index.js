const employeesInfo = document.createElement('ul');
document.getElementById("p-01").appendChild(employeesInfo)

fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(employeeData => employeeData.forEach(employee => renderBtn(employee)))


function renderBtn(employee) {
    const newBtn = document.createElement("button");
    newBtn.addEventListener('click', () => console.log("This works"))
    newBtn.className = "infoBtn";
    newBtn.innerText = `${employee.name}`
    employeesInfo.appendChild(newBtn);
    //     `
    //     <button class="infoBtn">${employee.name}</button><br>

    // `

    // addsEventListener(employee)
}


function addsEventListener(employee) {
    const btns = document.getElementsByClassName("infoBtn");
    console.log(btns);

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            console.log(`${employee.name}`)
        }, false)
    }
    // btns.forEach(btn => btn.addEventListener('click', function () {
    //     console.log(`${employees.name}`)
    // }))

}




// function addsEventListener(employees) {
//     const btns = document.getElementsByClassName("infoBtn");
//     console.log(btns);

//     for (let i = 0; i < btns.length; i++) {
//         btns[i].addEventListener('click', function () {
//             alert('this employee was clicked')
//         }, false)
//     }
//     // btns.forEach(btn => btn.addEventListener('click', function () {
//     //     console.log(`${employees.name}`)
//     // }))

// }
// function addEventListeners() {

//     const btns = document.querySelectorAll(".infoBtn");
//     btns.addEventListeners('click', (e) => {
//         console.log(e)
//     })



// }
// }
// btns.forEach(btn => btn.addEventListener('click', function () {
//     console.log('does this work')
// }, {
//     once: true
// }))