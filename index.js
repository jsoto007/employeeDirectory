fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(employeeData => employeeData.forEach(employee => renderBtn(employee)))

const employeeInfo = document.createElement('ul');

function renderBtn(employee) {
    employeeInfo.className = 'infoBox'
    employeeInfo.innerHTML = `
    <button class="infoBtn">${employee.name}</button><br>
   
`
    document.getElementById("p-01").appendChild(employeeInfo)

    addsEventListener(employee)
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